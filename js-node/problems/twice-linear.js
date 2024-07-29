function dblLinear(n) {
    let u = [1]
    let x2 = 0, x3 = 0
    for (let i = 0; i < n; i++) {
        let next2 = 2 * u[x2] + 1
        let next3 = 3 * u[x3] + 1
        if (next2 < next3) {
            u.push(next2)
            x2++
        } else if (next3 < next2) {
            u.push(next3)
            x3++
        } else {
            u.push(next2)
            x2++
            x3++
        }
    }
    return u[n]
}
;(() => {
    console.log(dblLinear(10), 22)
    console.log(dblLinear(20), 57)
    console.log(dblLinear(30), 91)
    console.log(dblLinear(50), 175)
    console.log(dblLinear(100), 447)
})()