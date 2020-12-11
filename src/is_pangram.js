const isPangram = function(text) {
    if (text.length < 26) {return false}
    newText = text.toLowerCase()
    let letterHash = {};
    const pattern = /[a-z]/
    for (let i of newText) {
        if (pattern.test(i)){
            letterHash[i] = true;
        }
    }
    return Object.keys(letterHash).length >= 26;
};


module.exports = isPangram;
