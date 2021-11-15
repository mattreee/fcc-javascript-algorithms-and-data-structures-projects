function convertToRoman(num) {

  const romans = ['I','V','X','L','C','D','M'];
  const arabic = [1, 5, 10, 50, 100, 500, 1000];
  const stringNum = String(num);
  let conversion = '';

  if(stringNum.search(/(9|4)/) != -1){
    findLowest(num, arabic);
    
    if(stringNum.at(-1) == 9) {
      let newRoman = conversion.replace('VIIII', 'IX')
      conversion = newRoman;
    }
    if(stringNum.at(-2) == 9){
      let newRoman = conversion.replace('LXXXX', 'XC');
      conversion = newRoman;
    }
    if(stringNum.at(-3) == 9){
      let newRoman = conversion.replace('DCCCC', 'CM');
      conversion = newRoman;
    }

    if(stringNum.at(-1) == 4) {
      let newRoman = conversion.replace('IIII', 'IV')
      conversion = newRoman;
    }
    if(stringNum.at(-2) == 4){
      let newRoman = conversion.replace('XXXX', 'XL');
      conversion = newRoman;
    }
    if(stringNum.at(-3) == 4){
      let newRoman = conversion.replace('CCCC', 'CD');
      conversion = newRoman;
    }

  } else {
    findLowest(num, arabic);
  }

  function findLowest(number, arr){
    for (let i = arr.length; i >= 0; i--){
      if(number - arr[i] >= 0){
        doSubtraction(number, arr[i], i);
        break;
      }
    }
  }

  function doSubtraction(numbe, subt, index){
    let n = numbe;
    do {
      conversion += romans[index];
      n -= subt;
    } while (n - subt >= 0);
    findLowest(n, arabic)
  }

  console.log(conversion);
  return conversion;
}

convertToRoman(400);