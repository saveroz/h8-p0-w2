var name='savero';
var peran='ksatria';

if (!name && !peran){
console.log("Nama harus diisi!");
}
else if(!peran){
console.log(`Halo ${name}, Pilih peranmu untuk memulai game!`);
}    
else if (name && peran==='ksatria'){
    console.log(`Selamat datang di Dunia Proxytia, ${name}`);
    console.log(`Halo ${peran} ${name}, kamu dapat menyerang dengan senjatamu!`);
}  
else if(name && peran==='tabib'){
    console.log(`Selamat datang di Dunia Proxytia, ${name}`);
    console.log(`Halo ${peran} ${name}, kamu akan membantu temanmu yang terluka.`);

}
else if(name && peran==='penyihir'){
    console.log(`Selamat datang di Dunia Proxytia, ${name}`);
    console.log(`Halo ${peran} ${name}, ciptakan keajaiban yang membantu kemenanganmu!`);
}

