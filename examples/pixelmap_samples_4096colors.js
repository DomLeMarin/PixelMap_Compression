require('../src/pixelmapCompression_4096colors.js')
require('./generateExample_4096colors.js')

// TILE 0
const sample1 = [
  '000000000000000000000000000000000000000000000000',
  '000000000000000000022ffffff022000000000000000000',
  '000000000000000000ffffffffffff000000000000000000',
  '000000000000000000fff022022fff000000000000000000',
  '000000000000000000a75ffffffa75000000000000000000',
  '000000000000000022da8da8da8da8022000000000000000',
  '000000000000000022da8da8da8da8022000000000000000',
  '000000000000000022764c97c97764022000000000000000',
  '000000000000000a75355566566355a75000000000000000',
  '000000000000000a75a75022022a75a75000000000000000',
  '000000022466466fff022ceecee022fff466466000000000',
  '0000000220220220220a00a00a00a0022022022000000000',
  '000000022466466022ceeceeceecee022466466000000000',
  '000000000022022fff700700700700fff022022000000000',
  '000000000022022000022022022022000022022000000000',
  '000000000000000000000000000000000000000000000000'
];

//TILE 80
const sample2 = [
  '9ceace9ce9ceace9ce9ce8be8be6be6ae7be7be7be6be7be',
  'cdeace8be9ceade9ce9ce8be8be7be7be6ae6ae6ae6ae8be',
  '9aebcebdebdebdeacecdf4125119336116113029ce7ae9be',
  '9aebbecdebdeace9be922a22911922a11911711aceacebde',
  '9ae9ae9aeabe9aea33a22b22d22c22b22922811811aceace',
  '7ae8ae8ae9aed77d66d44d33b229223229545118119be8be',
  '7ae7ae7ae7aec33c22a11722754d97da84233114116ae7ae',
  '6ae6ae6ae6ae611611511112444ec9da8b8733379b8be8be',
  '6ae6ae6ae69c311301965dee213111555965322aceaceace',
  '6ae6ae6ae6ae511511965222322eb9ec9eb94117ad8ae7ae',
  '6ae6ae7be7be711311a76eb9ec9effdeeec92018ae6ae6ae',
  '6be8ceace822311311201c97eb9ecaec93114117119be9ae',
  '7be8be622311311c98311b87d98a764112014123116119ae',
  '8be911512612eb8da8b87d98fdbdb9511ecbeca912922711',
  '9ce712311411ec9da8ecaecafdbeb9c98ca8fdb411a12911',
  '822511311da8ec9c97ec9ecaecaecaeba865c98ecb611a22'
];

//TILE 2066
const sample3 = [
  'ffffffffeffdfcbf99f77e66e66e77f99fccffeffeffffff',
  'ffffffffedabd68e66e66f77fcae66f99d68eabfeeffffff',
  'ffefeef76f54e77fbad8beacfccd79fede79f64f75ffefee',
  'ffeeacf65f54e77fdbfedfedfedfccfdce68f64e64d9cffe',
  'fcbe67e60f62f63f55fefffffcbfdbfeefdee8ae67e67fcb',
  'f99d67e61f61f63f76feffefe78d67ebdfeefdce78e67f99',
  'f75f64f64f65e66f99feffdee67e67c8bffefede89e64f75',
  'f64f63f64f65e65fbafeffeefcbfaafddffefcde68e64e64',
  'e64e64f64f54d69fddfedeabf9afcbfeffefe78e65e53f64',
  'f75e63f64f54e7afedfedd79e68e68ecefdffcbe65f64f75',
  'f89e67e67fcbedefeffddd79e67d67ebdffefdce67e77f98',
  'fcbe67e77fbbfeffefffdfdcfbafbafeefeefbbe67e66fda',
  'feee9cf63f63d68fedfbbfddfedfedfdcfcbf76e65e9cfff',
  'feefeef75f62e8afdcd69fdde9bd7ae79e68e65f87ffffee',
  'fffffffefe9cd79f89e68fcaf75e64e67e69e9cfefffffff',
  'ffffffffffeefdcf99f78e66e64f75f98fccfeefffffffff'
]

//TILE 3807
const sample4 = [
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf9cf99c336336336336336',
  '9cf9cf9cf9cf9cf9cf9cf9cf9cf699333336333333333333'
]

//TILE 3968
const sample5 = [
  '000000000000000aaaffffffffffffffffffffffffffffff',
  '000000000000999fffffffffffffffffffffffffffffffff',
  '000000000000000dddffffffffffffffffffffffffffffff',
  '000000000000000000dddfffffffffffffffffffffffffff',
  '000ddd000000000000000dddffffffffffffffffffffffff',
  'ffffffddd000000000000000dddfffffffffffffffffffff',
  'fffffffffddd000000000000000dddffffffffffffffffff',
  'ffffffffffffddd000000000000000dddfffffffffffffff',
  'fffffffffffffffddd000000000000000eeeffffffffffff',
  'ffffffffffffffffffccc000000000000000dddfffffffff',
  'fffffffffffffffffffffddd000000000000000ccdfffaaa',
  'ffffffffffffffffffffffffeee00000000000000099a000',
  'fffffffffffffffffffffffffffddd000000000000000000',
  'ffffffffffffffffffffffffffffffccc000000000000000',
  'fffffffffffffffffffffffffffffffffeee000000000000',
  'ffffffffffffffffffffffffffffffeee000000000000000'
]

let ss, encoded, decoded

console.log("*************** TILE 0 ***************")

ss = sample1.join("")

encoded = encode(ss)
decoded = decode(encoded)

console.log('Original:' + ss)
console.log('Encoded:' + encoded)
console.log('Decoded: ' + decoded)
console.log('Matching: ' + (ss == decoded))
console.log('Original Length:' + ss.length)
console.log('Encoded Length:' + encoded.length)
console.log('Ratio:' + ((1 - encoded.length/ss.length) * 100).toFixed(2) + '%')

console.log("")


console.log("*************** TILE 80 ***************")

ss = sample2.join("")

encoded = encode(ss)
decoded = decode(encoded)

console.log('Original:' + ss)
console.log('Encoded:' + encoded)
console.log('Decoded: ' + decoded)
console.log('Matching: ' + (ss == decoded))
console.log('Original Length:' + ss.length)
console.log('Encoded Length:' + encoded.length)
console.log('Ratio:' + ((1 - encoded.length/ss.length) * 100).toFixed(2) + '%')

console.log("")
console.log("*************** TILE 2066 ***************")

//ss = generateRandomExample()
ss = sample3.join("")

encoded = encode(ss)
decoded = decode(encoded)

console.log('Original:' + ss)
console.log('Encoded:' + encoded)
console.log('Decoded: ' + decoded)
console.log('Matching: ' + (ss == decoded))
console.log('Original Length:' + ss.length)
console.log('Encoded Length:' + encoded.length)
console.log('Ratio:' + ((1 - encoded.length/ss.length) * 100).toFixed(2) + '%')

console.log("")
console.log("*************** TILE 3807 ***************")

ss = sample4.join("")

encoded = encode(ss)
decoded = decode(encoded)

console.log('Original:' + ss)
console.log('Encoded:' + encoded)
console.log('Decoded: ' + decoded)
console.log('Matching: ' + (ss == decoded))
console.log('Original Length:' + ss.length)
console.log('Encoded Length:' + encoded.length)
console.log('Ratio:' + ((1 - encoded.length/ss.length) * 100).toFixed(2) + '%')

console.log("")
console.log("*************** TILE 3968 ***************")

ss = sample5.join("")

encoded = encode(ss)
decoded = decode(encoded)

console.log('Original:' + ss)
console.log('Encoded:' + encoded)
console.log('Decoded: ' + decoded)
console.log('Matching: ' + (ss == decoded))
console.log('Original Length:' + ss.length)
console.log('Encoded Length:' + encoded.length)
console.log('Ratio:' + ((1 - encoded.length/ss.length) * 100).toFixed(2) + '%')