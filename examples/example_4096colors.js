require('../src/pixelmapCompression_4096colors.js')
require('./generateExample_4096colors.js')

const sample1 = [
  '390390390390390390390000000390390390390390390390',
  '390390390390390390000ff0ff0000390390390390390390',
  '390390390390390390000ff0ff0000390390390390390390',
  '390390390390390000ff0ff0ff0ff0000390390390390390',
  '000000000000000000ff0ff0ff0ff0000000000000000000',
  '000ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0000',
  '390000ff0ff0ff0ff0000ff0ff0000ff0ff0ff0ff0000390',
  '390390000ff0ff0ff0000ff0ff0000ff0ff0ff0000390390',
  '390390390000ff0ff0000ff0ff0000ff0ff0000390390390',
  '390390390000ff0ff0ff0ff0ff0ff0ff0ff0000390390390',
  '390390000ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0000390390',
  '390390000ff0ff0ff0ff0ff0ff0ff0ff0ff0ff0000390390',
  '390000ff0ff0ff0ff0ff0000000ff0ff0ff0ff0ff0000390',
  '390000ff0ff0ff0000000390390000000ff0ff0ff0000390',
  '000ff0ff0000000390390390390390390000000ff0ff0000',
  '000000000390390390390390390390390390390000000000'
];

const sample2 = [
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000'
];

const sample3 = [
  '0c699cf9f390f666cf069cc3ffcc9c0399c366636cc6999f',
  '9c0930f6c66336f00f00093cf336663636f66330c630cc3f',
  '6699300fc3cc3303fc9c96ccf66f9033cfc003c9ff66f00f',
  'f360f9fc3c30cf00c3f9c3396ccc9933303f3cf09f6c363c',
  '39900639c9633f0f93fcc69cccc0cc3606c6f33330f6f6f0',
  'f0333639063063330cc63c0c303f096f6c933ccf0f366393',
  'c63f33c6c0c6cc0cc0f9ff309f3c63399396f6f66993fc3c',
  'f9039f36cc966cf63c39f630f6cf960f900ccc390963f993',
  '9f03f69396f0f0f09f39cc0c360f633c9c636c6c693fc396',
  '0c393066c909f69030c3930cf06f3f99360c00fc66006c36',
  '3c00c3c0f63900c60f9996639006c39cc30930f0996ff0f9',
  '3036090c339f6936933c63630963fc03f66396cfffc333f3',
  'f60036c6366c996fffcc9f0306ccf6f36003093c0cc96f6f',
  '3ff06666f9cfc6f063309990fccf03f90f39cff3f60f30f3',
  '36393f00f9f0c999c0c3699f3f93c90c963630c9069c666f',
  '9fcf3399c03390300c03c693636c0cf9f0f6cf0cc0c933c3'
]

const sample4 = [
  'fa43c98ab4bc5a8866b0142a0ff8f086aff5542a112f43d1',
  'e4eb2677d72b11a6cd47fe948d81eac20d6582cd127129af',
  'f7b5a6673a20b1256a98a9e86f8368d1b02fcc55970c0a2d',
  'f67222b7457dfafcbacae68e66ba1e30e748d6b3e34418a8',
  '593e208210b0511e59301676a0de6aaac0e7b6b3a7a39935',
  'ca0bbab8d1423770de8263589138f67338e85157850bb819',
  'c1c77f4e022b14f410b8c5e4dff925669a358b70b93f7991',
  '0d974e8840e4ad2c6eecbd02804ad15cd6e71f8c044efc9d',
  'aea5fd9dc52f90927b7f12fd1b4d6c6c96c6c2496b6dcddb',
  'ed6a9ae3a56e745a1813df407a398d98e260916d5f65c396',
  '92ba622967128179a2b01947d7b2d1d9a2790875574a87f6',
  'b845ac6bc9438b270e2155a4d9149871c2b913a11f451405',
  '8aef3555198c0f2fe627f59638b8697f7eaf76b43f754a1a',
  '4f67fd9ebcaf6960be531a929d345f2060112af9b17803e1',
  'fdf088e954117785c4da63678a85906882709fe71fff19bc',
  '0b3b145da2a6bf3a7aa223f4c885832a3d5c5ce7e13aea68'
]

let ss, encoded, decoded

console.log("*************** SAMPLE 1 ***************")

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


console.log("*************** SAMPLE 2 ***************")

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
console.log("*************** SAMPLE 3 ***************")

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
console.log("*************** SAMPLE 4 ***************")

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