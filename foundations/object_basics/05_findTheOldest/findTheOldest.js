const findTheOldest = function (arr) {
    const old = arr.reduce((total, item) => {
        if (!total.yearOfDeath) {
            total.yearOfDeath = new Date().getFullYear();
        }

        const totalAge = total.yearOfDeath - total.yearOfBirth;
        const itemAge = item.yearOfDeath - item.yearOfBirth;

        if (totalAge < itemAge) {
            return item;
        } else {
            return total;
        }
    }, arr[0])

    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
