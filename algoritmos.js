/*
a)-Cifrar (frese): String "nuevaFrase" {"cifrado":______________}
 recibe un string por la ulr y cifra la cadena
    las vocales minusculas a=0, e=1, i=2, o=3, u=4
    Las cocales mayusculas A=9, E=8, I=7, O=6, U=5

    los numeros 0=A, 1=E, 2=I, 3=0, 4=0, 5=a, 6=e, 7=i, 8=0, 9=u


*/

function cifrar(frase){
    var palabra = "";

    for(i = 0; i < frase.length; i++){
        
        switch(frase.charAt(i)){
            case "a":
                palabra += "0";
                break;
            case "e":
                palabra += "1";
                break;
            case "i":
                palabra += "2";
                break;
            case "o":
                palabra += "3";
                break;
            case "u":
                palabra += "4";
                break;
            case "A":
                palabra += "9";
                break;
            case "E":
                palabra += "8";
                break;
            case "I":
                palabra += "7";
                break;
            case "O":
                palabra += "6";
                break;
            case "U":
                palabra += "5";
                break;
            case "0":
                palabra += "A";
                break;
            case "1":
                palabra += "E";
                break;
            case "2":
                palabra += "I";
                break;
            case "3":
                palabra += "O";
                break;
            case "4":
                palabra += "U";
                break;
            case "5":
                palabra += "a";
                break;
            case "6":
                palabra += "e";
                break;
            case "7":
                palabra += "i";
                break;
            case "8":
                palabra += "o";
                break;
            case "9":
                palabra += "u";
                break;
            default:
                palabra += frase.charAt(i);
        }
    };
    return palabra;
}

function decifrar(palabra){
    var restaurado = "";

    for(i = 0; i < palabra.length; i++){
        
        switch(palabra.charAt(i)){
            case "0":
                restaurado += "a";
                break;
            case "1":
                restaurado += "e";
                break;
            case "2":
                restaurado += "i";
                break;
            case "3":
                restaurado += "o";
                break;
            case "4":
                restaurado += "u";
                break;
            case "9":
                restaurado += "A";
                break;
            case "8":
                restaurado += "E";
                break;
            case "7":
                restaurado += "I";
                break;
            case "6":
                restaurado += "O";
                break;
            case "5":
                restaurado += "U";
                break;
            case "A":
                restaurado += "0";
                break;
            case "E":
                restaurado += "1";
                break;
            case "I":
                restaurado += "2";
                break;
            case "O":
                restaurado += "3";
                break;
            case "U":
                restaurado += "4";
                break;
            case "a":
                restaurado += "5";
                break;
            case "e":
                restaurado += "6";
                break;
            case "i":
                restaurado += "7";
                break;
            case "o":
                restaurado += "8";
                break;
            case "u":
                restaurado += "9";
                break;
            default:
                restaurado += palabra.charAt(i);
        }
    };
    return restaurado;
}

exports.cifrar = cifrar;
exports.decifrar = decifrar;



