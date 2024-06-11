const average = (arr) => {
    return arr.reduce((prev, curr) => {return prev + curr}, 0) / arr.length;
}

const min = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[0];
}

const max = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

const analyzeArray = (arr) => {
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: arr.length
    }
}

module.exports = analyzeArray;