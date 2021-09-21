
const allowed_hex = ['0', '3', '6', '9', 'c', 'f']

chunk_of_3 = (img_str) => {
  const chunks = []
  for (const i of Array(img_str.length / 3).keys()) {
    chunks.push(img_str.slice(i * 3, (i + 1) * 3))
  }
  return chunks
}

pixelMapColorToHex = (color) => {
  // mapping to a number between 0 and 215 (representing the Web-safe colors)
  const charCode = (allowed_hex.indexOf(color[0])) + (allowed_hex.indexOf(color[1]) * 6) + (allowed_hex.indexOf(color[2]) * 36)
  return String.fromCharCode(charCode).toString(16)
}

hexToPixelMapColor = (char) => {
  const charCode = char.charCodeAt(0)
  const b = Math.floor(charCode / 36)
  const g = Math.floor((charCode - b * 36) / 6)
  const r = charCode % 6

  return [allowed_hex[parseInt(r)], allowed_hex[parseInt(g)], allowed_hex[parseInt(b)]].join('')
}

compress = (str) => {
  let i = 0, sequence = 0
  const resultMap = new Map()

  while (i < str.length) {
    let current = str[i], next = str[i + 1]

    if (!resultMap.has(sequence)) {
      resultMap.set(sequence, {[current]: 0})
    }

    resultMap.get(sequence)[current]++

    if (current !== next) {
      sequence++
    }

    i++
  }

  let result = []

  for (const [key, value] of resultMap.entries()) {
    result.push(Object.keys(value)[0])
    //the 256 is purely for cosmetic reasons, since the first UTF-8 symbols are not shown. It is nicer if we see actual symbols
    result.push(String.fromCharCode(256 - Object.values(value)[0]).toString(16))
  }

  return result.join('')
}

decompress = (str) => {
  let i = 0
  let result = []

  while (i < str.length) {
    let current = str[i], next = str[i + 1]

    if (i % 2 == 0) {
      const charCode = next.charCodeAt(0)
      //the 256 is purely for cosmetic reasons, since the first UTF-8 symbols are not shown. It is nicer if we see actual symbols
      const n = 256 - charCode
      result.push(current.repeat(n))
    }

    i++
  }

  return result.join('')

}

encode = (ss) => {
  return compress(chunk_of_3(ss).map(x => pixelMapColorToHex(x)).join(''))
}

decode = (cc) => {
  return Array.from(decompress(cc)).map(x => hexToPixelMapColor(x)).join('')
}

