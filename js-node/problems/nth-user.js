function userNumber(n) {
    return parseInt(n.toString(8).replace(/[4567]/g, c => +c + 1), 10).toString();
}

; (() => {
    console.log(userNumber(1), "1")
    console.log(userNumber(4), "5")
    console.log(userNumber(8), "10")
    console.log(userNumber(10), "12")
    console.log(userNumber(20), "25")
    console.log(userNumber(500), "875")
    console.log(userNumber(1000), "1860")
    console.log(userNumber(100000), "303250")
})()