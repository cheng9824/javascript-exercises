const removeFromArray = function(arr, ...num) {
    let result = [];

    arr.forEach((item) => {
        if (!num.includes(item)) {
            result.push(item);
        }
    })

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
