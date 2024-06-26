const isOvernight = function(date) {
    return date.getHours() >= 22;
}

const isSunday = function(date) {
    return date.getDay() === 0;
}

calculateRide = function(distance, date) {
    if (typeof distance !== 'number') throw new Error('Invalid parameter distance');
    if (!(date instanceof Date)) throw new Error('Invalid parameter date');
    if (isOvernight(date)) return distance * 3.90;     
    if (isSunday(date)) return distance * 2.90;  
    return distance * 2.10;
}

module.exports = {
    isOvernight,
    isSunday,
    calculateRide,
}