const cipher = (string, key) => {
    if(key !== 0 || !isNaN(key)){
        const arr = [];

        for(let i = 0;i < string.length; i++){
            if(/[^a-zA-Z]/.test(string[i])){
                arr.push(string[i]);
            }else{
                let code = string.charCodeAt(i);
                let shiftedCode = code + key;
                // Wrap-around for letters
                if (code >= 97 && code <= 122) {
                    if (shiftedCode > 122) shiftedCode = (shiftedCode - 97) % 26 + 97;
                    if (shiftedCode < 97) shiftedCode = (shiftedCode - 97 + 26) % 26 + 97;
                }else if (code >= 65 && code <= 90) {
                    shiftedCode = ((shiftedCode - 65) % 26) + 65;
                }
                arr.push(String.fromCharCode(shiftedCode));
            }
        }

        return arr.join('');
    }

}
module.exports = cipher