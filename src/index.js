const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('');
    arr = [];
    arr1 = [];
    while(expr.length != 0){
        for (let i=0; i<10; i++){
            arr.push(expr[i]);
        }
        arr1.push(arr);
        arr = [];
        if (expr.length != 0){
            expr = expr.splice(10)
        }
    }

    const arr2 = [];
    let arr3 = [];
    arr1.forEach(el => {
        for (let i = 0; i<10; i+=2){
            arr3.push(el[i] + el[i+1])
        }
        arr2.push(arr3);
        arr3 = [];

    });

    let cod = '';
    let arrEnd = [];
    arr2.forEach(el =>{
        for (let i = 0; i<5; i++){
            switch(el[i]){
                case '10':
                    cod = cod + '.'
                    break
                case '11':
                    cod = cod + '-'
                    break
                case '**':
                    cod = ' '
                    break
            }
        }
        arrEnd.push(cod);
        cod = ''
    })

    let str = '';
    arrEnd.forEach(el => {
       if(el != ' ') {
       str = str + MORSE_TABLE[el]; 
       } else{
        str = str + el; 
       }
    })
    return str
}

module.exports = {
    decode
}