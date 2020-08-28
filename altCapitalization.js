function altCap(s){

    let array1 = s.split(''), array2 = [...array1];

    let str1 = array1.map((val, idx) => {
        return idx%2 === 0 ? val.toUpperCase() : val;
        }).join('');
    let str2 = array2.map((val, idx) => {
        return idx%2 !== 0 ? val.toUpperCase() : val;
        }).join('');
return new Array (str1, str2);
};

altCap('abcdefg');