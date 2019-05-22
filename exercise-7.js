// 1. Menyusun Barisan Bintang

console.log('1. Menyusun Barisan Bintang');
console.log('');
var rows1=5;

for (i=0; i<rows1; i++){
    console.log('*');
}
console.log('');

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping')
var rows2=5;
var a;
console.log('');

for (i=0; i<rows2; i++){
    asterisk='';
    for (j=0; j<rows2; j++){
        
        asterisk+='*';
    }
    console.log(asterisk);
}
console.log('');

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log('');

var rows3=5;
var asterisk='';

for (i=0; i<rows3; i++){
    asterisk+='*';
    console.log(asterisk);
}
