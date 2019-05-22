// 1. Melakukan Looping Menggunakan While

var i=0; 
console.log('1. Melakukan Looping Menggunakan While');
console.log('Looping Pertama');
while (i<20){
    i+=2;
    console.log(i+' - I love Coding');
    
}

i=20
console.log('Looping Kedua')
while (i>0){
    console.log(i+' - I will become fullstack developer');
    i-=2;
}
console.log('');

//2. Melakukan Looping Menggunakan For

console.log('2. Melakukan Looping Menggunakan For');
console.log('');
console.log('Looping pertama')

for (i=1; i<21; i++){
console.log(i+' - I love Coding');
}

console.log('Looping Kedua');
for (i=20; i>0; i--){
    console.log(i +' - I will become fullstack developer');
}
console.log('');
//3. Angka Ganjil dan Genap

console.log('3. Angka Ganjil dan Genap');
console.log('');
console.log('a. Ganjil-Genap');
console.log('');

//a. Ganjil-Genap
for (i=1; i<101; i++){
    if (i%2===0){
        console.log(i+' - Genap');
    }
    else{
        console.log(i +' - Ganjil');
    }
}

// b. Perulangan dengan counter 2
console.log('');
console.log('b. Perulangan dengan counter 2');
console.log('');
for (i=1; i<101; i+=2){
    if (i%3===0){
        console.log(i +'  kelipatan 3');
    }
}
console.log('');
// c. Perulangan dengan counter 5

console.log('c. Perulangan dengan counter 5');
console.log('');
for (i=1; i<101; i+=5){
    if (i%6===0){
        console.log(i +'  kelipatan 6');
    }
}
console.log('');
// d. Perulangan dengan counter 9 

console.log('d. Perulangan dengan counter 9');
console.log('');
for (i=1; i<101; i+=9){
    if (i%10===0){
        console.log(i +' kelipatan 10');
    }
}