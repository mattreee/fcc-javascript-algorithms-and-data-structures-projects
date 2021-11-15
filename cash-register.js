function checkCashRegister(price, cash, cid) {

const units = {
  'penny' : 0.01,
  'nickel' : 0.05,
  'dime' : 0.1,
  'quarter' : 0.25,
  'dollar' : 1,
  'five' : 5,
  'ten' : 10,
  'twenty' : 20,
  'hundred' : 100
}

  const valueDue = cash - price;
  // console.log(`value due is ${valueDue}`)
  const totalCid = totalMoney(cid);
  
  if(valueDue > totalCid) return {status: "INSUFFICIENT_FUNDS", change: []};
  if(valueDue == totalCid) return {status: "CLOSED", change: [...cid]}

  else {
    //the value due can only be taken of lesser or equal values of the initial currency in the drawer;
    const subtractUnits = Object.values(units).filter(elem => {
      return elem <= valueDue;
    });

    let changeArr = [['holder', 0]];
    var amount = valueDue;

    for (let i = subtractUnits.length; i > 0; i--){
      if (cid[i-1][1] > valueDue){
        changeArr.push([cid[i - 1][0], valueDue]);
        break;
      }
      changeArr.push([cid[i - 1][0], findAmount(amount, cid[i - 1][1], subtractUnits[i - 1])]);
    }

    changeArr.shift();
    // console.log(changeArr);

    let curatedArr = changeArr.filter(elem => {
      return elem.every(elem => {
        return elem != undefined;
      })
    })
    // console.log(curatedArr);

    if(totalMoney(curatedArr) < valueDue) return {status: "INSUFFICIENT_FUNDS", change: []};

    if (totalMoney(changeArr) < totalCid){
      return {status: "OPEN", change: [...changeArr]};
    } else {
      return {status: "OPEN", change: [...curatedArr]};
    }
  }

  function totalMoney(arr){
    let array = arr.reduce((total, curr) => {
      return total + curr[1];
    }, 0);
    return array;
  }

  function findAmount(value, cash, subt){
    let temp = 0;
    if (value > cash) {
      amount = amount - cash;
      return cash;
    } else if (amount > subt) {
      do {
        amount = amount - subt;
        temp += subt;
      } while(amount > subt);
      if (temp < 0.05) return temp+= 0.01; //this is a shortcut to rounding the number when it gets really small, rounding elsewhere would cause extra quarters or nickels to be added
      else return temp;
    }
  }
}

checkCashRegister(19.5, 20, [ ["PENNY", 1.01],
                              ["NICKEL", 2.05],
                              ["DIME", 3.1],
                              ["QUARTER", 4.25],
                              ["ONE", 90],
                              ["FIVE", 55],
                              ["TEN", 20],
                              ["TWENTY", 60],
                              ["ONE HUNDRED", 100]
                            ]);