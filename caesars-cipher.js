function rot13(str) {

  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const rotEq = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];

  const strArr = str.split('');
  const translation = strArr.map((elem) => {
    if(alphabet.indexOf(elem) == -1){
      return elem;
    }
    return rotEq[alphabet.indexOf(elem)]
  })
  console.log(translation)
  return translation.join('');
}

rot13("SERR PBQR PNZC");