if(new Date().getHours()>=0 && new Date().getHours()<6 ){
  document.body.style.backgroundColor='black'
alert(`Geceniz xeyre`);

}

else if(new Date().getHours()>=6 && new Date().getHours()<12 ){
  document.body.style.backgroundColor= '#008080'
alert(`Sabahiniz xeyir`);

}

else if(new Date().getHours()>=12 && new Date().getHours()<18 ){
  document.body.style.backgroundColor='yellow'
alert(`Gunortaniz xeyir `);

}

else if(new Date().getHours()>=18 && new Date().getHours()<24 ){
  document.body.style.backgroundColor= 'blue'
alert(`Axsaminiz xeyir `);
}
