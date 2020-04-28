function pigIt(str){ 
    return str.split(' ').map(i => i == '!' || i == '?' ? i : `${i.slice(1)}${i[0]}ay`).join(' ')
   }