function telephoneCheck(str) {
  
  let strArr = Array.from(str);

  let onlyNumbers = strArr
    .filter(elem => {
      return elem == Number(elem);
    }).filter(elem => {
      return elem != ' '
    }).join('');

  if(str.search(/[a-z]/) != -1 || str.search(/-/) == 0) return false;
  if(onlyNumbers.length < 10 || onlyNumbers.length > 11) return false;
  if(str.search(/\d{3}\)-/) != -1) return false;
  if(onlyNumbers[0] == 2 || onlyNumbers[0] == 0 || onlyNumbers[0] > 5) return false;
  if(str.search(/\D-/) != -1) return false;
  if(str.search(/\(/) == -1 && str.search(/\)/) != -1 || str.search(/\)/) == -1 && str.search(/\(/) != -1) return false;
  if(str.search(/\-\d{1}$/) != -1) return false;

  return true;
}

console.log(telephoneCheck("55 55-55-555-5"));