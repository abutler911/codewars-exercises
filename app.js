function toCamelCase(str){
    if(str === '') {
      console.log('Empty string');
      return;
    }
    
    let splitString = str.replace(/_/g, '-').toLowerCase().split('-');
    
    for(let i = 1; i < splitString.length; i++) {
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  
    let result = splitString.join('');
    console.log(result);
  }
