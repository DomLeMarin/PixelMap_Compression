
const allowed_hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const color_offset = 48 // ASCII char 48 ("0") => 112 ("p") are reserved for encoding colors (need 2x64 chars)
const count_offset = 126 // ASCII char 127 => 255 are reserved for encoding the color repetition count

chunk_of_n = (img_str, n) => {
  const chunks = []
  for (const i of Array(img_str.length / n).keys()) {
    chunks.push(img_str.slice(i * n, (i + 1) * n))
  }
  return chunks
}

pixelMapColorToHex = (color) => {
  // mapping to a number between 0 and 4095
  const colorNumber = (allowed_hex.indexOf(color[0])) + (allowed_hex.indexOf(color[1]) * 16) + (allowed_hex.indexOf(color[2]) * 256)
  const charCode1 = color_offset + Math.floor(colorNumber / 256)
  const charCode2 = color_offset + colorNumber % 256
  return String.fromCharCode(charCode1) + String.fromCharCode(charCode2)
}

hexToPixelMapColor = (str) => {
  const charCode1 = str.charCodeAt(0) - color_offset
  const charCode2 = str.charCodeAt(1) - color_offset
  const colorNumber = charCode1 * 256 + charCode2
  const b = Math.floor(colorNumber / 256)
  const g = Math.floor((colorNumber - b * 256) / 16)
  const r = colorNumber % 16

  return [allowed_hex[parseInt(r)], allowed_hex[parseInt(g)], allowed_hex[parseInt(b)]].join('')
}

compress = (str) => {
  let i = 0, sequence = 0
  const resultMap = new Map()

  while (i < str.length) {
    let current = str[i] + str[i+1]
    let next = str[i + 2] + str[i + 3]

    if (!resultMap.has(sequence)) {
      resultMap.set(sequence, {[current]: 0})
    }

    resultMap.get(sequence)[current]++

    if (current !== next || resultMap.get(sequence)[current] == 128) {
      sequence++
    }

    i+=2
  }

  let result = []

  for (const [key, value] of resultMap.entries()) {
    result.push(Object.keys(value)[0])
    if (Object.values(value)[0] > 1) {
      result.push(String.fromCharCode(count_offset + Object.values(value)[0]))
    }
  }

  return result.join('')
}

decompress = (str) => {
  let i = 0
  let result = []

  while (i < str.length - 1) {
    let current = str[i] + str[i + 1], next = str[i + 2]

    const charCode = (next) ? next.charCodeAt(0) : 0

    if (charCode > count_offset) {
      const n = charCode - count_offset
      result.push(current.repeat(n))
      i += 3
    } else {
      result.push(current)
      i += 2
    }
  }

  return result.join('')

}

encode = (ss) => {
  const converted = chunk_of_n(ss,3).map(x => pixelMapColorToHex(x)).join('')
  const compressed = compress(converted)

  return compressed
}

decode = (cc) => {

  return chunk_of_n(decompress(cc),2).map(x => hexToPixelMapColor(x)).join('')
}

