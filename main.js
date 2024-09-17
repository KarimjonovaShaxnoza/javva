let ism = prompt('Ismizni kiriting').toLocaleLowerCase();

let harf = prompt('Harf kiriting').toLocaleLowerCase();

if(ism.includes(harf)){
    alert(ism + " ichida bu " + harf + ' mavjud')
}else{
    alert("Bu " + harf + ' siz kiritgan ismda mavjud emas')
}
