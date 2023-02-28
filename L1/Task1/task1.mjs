export function task_1(string1, string2, string3, string4) {
// 1.1
    function upOnlyFirst(str){
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
//1.2
    function goodSpaces (str){
        return str
            .replace(/^\s+/g, '') //. , ? ! : -
            .replace(/\s+$/g, '')
            .replace(/\s*([.,!?№:;@#$%^&*()_+='"\-<>{}|/\[\]])\s*/g, '$1 ')
            .replace(/\.+\s+\.+\s+\.+\s+/g, "... ")
            .replace(/\s+/g, ' ');
    }

//1.3
    function countWords (str){
        return str.split(" ").length;
    }

//1.4


//1.4.1
//Подсчет уникальных слов
//     function countUniqueWords (str) {
//
//         let words = arrOfWords(str);
//
//         let wordMap = {};
//         let uniqueWordMap = new Map();
//
//         for (let i = 0; i < words.length; i++) {
//             let currentWordCount = wordMap[words[i]];
//             let count = currentWordCount ? currentWordCount : 0;
//             wordMap[words[i]] = count + 1;
//         }
//
//         for (let key in wordMap) {
//             if (wordMap[key] === 1) {
//                 uniqueWordMap.set(key, 1);
//             }
//         }
//
//         return [...uniqueWordMap.keys()];
//     }

//1.4
//Подсчет сколько раз каждое слово в строке повторяется
    function countAllWords (str) {

        let words = arrOfWords(str);

        let wordMap = {};

        for (let i = 0; i < words.length; i++) {
            let currentWordCount = wordMap[words[i]];
            let count = currentWordCount ? currentWordCount : 0;
            if(words[i] === ""){
                continue;
            }
            wordMap[words[i]] = count + 1;
        }
        return wordMap;
    }

    function arrOfWords (str){
        return str
            .toLowerCase()
            .replace(/[0123456789]|\.|,|\?|!|'|`|"|№|;|:|&|@|#|~|\$|%|\^|\*|\(|\)|\{|}|\[|]|_|>|<|=|\+|\|\\|\/|\|+/g, "")
            .split(" ")
            .sort();
    }

    let a = "";
    let b = "";
    let output = "";


    a = string1;
    console.log("------------------------------------------------1.1------------------------------------------------");
    console.log(a + " -> " + upOnlyFirst(a));

    a = string2
    console.log("------------------------------------------------1.2------------------------------------------------");
    console.log(a + " -> \n" + goodSpaces(a));

    a = string3;
    console.log("------------------------------------------------1.3------------------------------------------------");
    console.log(a + " -> " + countWords(a)); //10
/*
    console.log("-----------------------------------------------1.4.1-----------------------------------------------");
    a = string4;
    b = countUniqueWords(a);
    output = "";
    for(let key in b){
        output += b[key] + "; ";
    }
    console.log(a + " -> \n" + output);
*/

    a = string4;
    b = countAllWords(a);
    output = "";
    for(let key in b){
        output += key +  " - " + b[key] + "\n";
    }
    console.log("------------------------------------------------1.4------------------------------------------------");
    console.log(a + " -> \n" + output);


}

