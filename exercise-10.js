// Logic Challenge Bandingkan Angka

function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    var result;
    if (angka2>angka1){
        result=true;
    }
    else if(angka2<angka1){
        result=false;
    }
    else{
        result=-1;
    }
    return result;
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false