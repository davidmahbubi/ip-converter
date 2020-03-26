// Anonymous function version

const binCollectionGenerator = lim => {

  let binCollection = new Array();

  for (let i = 1; i <= lim; i++) {
    if (i === 1) {
      binCollection.push(i);
    } else {
      binCollection.push(binCollection[i - 2] * 2);
    }
  }

  return binCollection.reverse();
}

const decimalToBinaryConverter = number => {

  const binCollection = binCollectionGenerator(8);

  return binCollection.map( num => {
    if ((number - num) < 0) {
      return '0';
    } else {
      number -= num;
      return '1';
    }
  }).join('');

}

const binaryToDecimalConverter = number => {

  const binLength = 8;
  const binCollection = binCollectionGenerator(binLength);    

  return number.toString().split('').map( (num, i) => {
    if ( num == 1 ) {
      return binCollection[i]
    } else {
      return 0;
    }
  }).reduce((acc, curr) => acc + curr);
}

const convertIpAddress = ({ip, type}) => {

  ip = ip.split('.');

  if (type == 'binary') {
    return ip.map( num => binaryToDecimalConverter(num)).join('.');
  } else {
    return ip.map( num => decimalToBinaryConverter(num)).join('.');
  }
}

console.log(decimalToBinaryConverter(192)) //* output: 11000000 */
console.log(binaryToDecimalConverter(11000000)) //* output: 192 */
console.log(convertIpAddress({
  ip: '11000000.10101000.00000001.00000001',
  type: 'binary'
})); //* output: 192.168.1.1 */

//* David >_< */