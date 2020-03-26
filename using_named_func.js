// Named function version

console.log(convertIpAddress({
  ip: '192.168.1.1',
  type: 'decimal'
}));

function binCollectionGenerator(lim) {

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

function decimalToBinaryConverter(number) {

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

function binaryToDecimalConverter(number) {

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

function convertIpAddress({ip, type}){

  ip = ip.split('.');

  if (type == 'binary') {
    return ip.map( num => binaryToDecimalConverter(num)).join('.');
  } else {
    return ip.map( num => decimalToBinaryConverter(num)).join('.');
  }
}