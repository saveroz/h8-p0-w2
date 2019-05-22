function xo(str) {
    // you can only write your code here!
    var total_x=0;
    var total_o=0;
    for (let char of str){
        if (char==='o'){
            total_o+=1;
        }
        else if(char==='x'){
            total_x+=1;
        }
    }
    if (total_o===total_x){
        return true;
    }
    else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true