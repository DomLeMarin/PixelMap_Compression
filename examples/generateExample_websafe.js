
generateRandomExample = () => {
  var result           = '';
  var characters       = '0369cf';
  var charactersLength = 256 * 3;
  for ( var i = 0; i < charactersLength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 6));
  }
  return result;
}
