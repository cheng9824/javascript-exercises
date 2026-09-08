const getTheTitles = function (books) {
    const result = books.reduce((total, item) => {
        total.push(item.title);
        return total;
    }, []);

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
