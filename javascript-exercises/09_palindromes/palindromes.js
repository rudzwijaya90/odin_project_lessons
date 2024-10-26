const palindromes = function (str) {
    const filteredStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    const reversedStr = filteredStr.split('').reverse().join('');
    return filteredStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
