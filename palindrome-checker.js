function palindrome(str) {

  const lowerCase = str.toLowerCase();
  const strArr = onlyLettersNoSpaces(lowerCase);
  const strArrReverse = strArr.slice(0).reverse();

  let trueOrFalse = true;
  for (let i = 0; i < strArr.length; i++){
    if(trueOrFalse == false){
      break;
    } else{
      if(strArr[i] !== strArrReverse[i]){
        trueOrFalse = false;
      }
    }
  }
  return trueOrFalse;

  function onlyLettersNoSpaces(str){
    return str.split('').map(elem => {
      if(elem.search(/[a-z0-9]/g) != -1) return elem;
    }).filter(elem => {
      if(elem != undefined) return elem;
    })
  }
}

palindrome("eye");