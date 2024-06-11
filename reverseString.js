const reverseString = (string) => {
    const arr = [];

    for(let i = 0; i < string.length; i++){
        arr.push(string[i]);
    }

    return arr.reverse().join('');
}

module.exports = reverseString;