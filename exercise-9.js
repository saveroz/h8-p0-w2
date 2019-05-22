// Tugas 1
console.log('Tugas 1');


function shoutOut(){
    return "Halo Function!";
}
console.log(shoutOut());
console.log('');

// Tugas 2

console.log('Tugas 2');

function calculateMultiply(a,b) {
    return a*b;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);
console.log('');

// Tugas 3
console.log('Tugas 3');
 
function processSentence(Name, Age, Address ,Hobby){
    var sentence=`Nama saya ${Name}, umur saya ${Age} tahun, alamat saya di ${Address}, dan saya punya hobby yaitu ${Hobby}!`;
    return sentence;
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

