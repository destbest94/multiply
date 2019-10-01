function simpleSum(a, b) {
  return a + b;
}

function sumString(first, second) {
  let fLength = first.length;
  let sLength = second.length;
  let temp = '';
  let a = 0;
  let b = 0;
  let result = '';
  let res = 0;
  let div = 0;

  if (fLength < sLength) {
    temp = second;
    second = first;
    first = temp;

    temp = fLength;
    fLength = sLength;
    sLength = temp;
  }

  for(let i = fLength - 1; i >= 0; i--) {
    a = first[i] - 0;
    b = 0;

    if(fLength - 1 - i < sLength) {
      b = second[sLength - (fLength - 1 - i) - 1] - 0;
    }

    //console.log(a, b);

    b += div;
    
    res = simpleSum(a, b);
    
    if(res > 9) {
      div = Math.floor(res / 10);
      // console.log(div);
      result = (res % 10).toString() + result;
    } else {
      div = 0;
      result = res.toString() + result;
    }
  }

  if (div != 0) result = div.toString() + result;

  return result;
}

module.exports = function multiply(first, second) {
  let result = '0';
  first = first.split('').reverse();
  second = second.split('').reverse();
  first.forEach((num1, index) => {
    let multiString = '';
    let temp = 0;
    let carry = 0;
    
    second.forEach((num2) => {
      temp = (num1 - 0) * (num2 - 0) + carry;
      
      if (temp > 9) {
        multiString = temp % 10 + multiString;
        carry = Math.floor(temp / 10);

      } else {
        multiString = temp + multiString;
        carry = 0;
      }

    });

    if (carry) {
      multiString = carry + multiString;
    }

    multiString += '0'.repeat(index);
    result = sumString(result, multiString);
    
  });
  return result;
}
