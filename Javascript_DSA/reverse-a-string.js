function reverseString(str) {
    let reversedStr = "";
    let getLastIndexChar = str.length -1;
    let getFirstIndexChar = 0;

    for(let i = getLastIndexChar; i >= getFirstIndexChar; i--) {
         reversedStr += str[i];
    }

    return reversedStr;
}

reverseString("brook")