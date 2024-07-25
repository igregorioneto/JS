function ipsBetween(start, end) {
    const ip1 = countIp(start)
    const ip2 = countIp(end)
    return Math.abs(ip1 - ip2)
}

function countIp(ip) {
    const valuesIp = ip.split('.').reverse();
    let total = 0;
    for (let i = 0; i < 4; i++) {
        let cubo = 1
        let value = parseInt(valuesIp[i])
        for (let n = 0; n < i; n++) {
            cubo *= 256            
        }
        total += (cubo *  value)
    }
    return total;
}

; (() => {
    console.log(ipsBetween("150.0.0.0", "150.0.0.1"), 1);
    console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
    console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
    console.log(ipsBetween("10.11.12.13", "10.11.13.0"), 243);
    console.log(ipsBetween("160.0.0.0", "160.0.1.0"), 256);
    console.log(ipsBetween("170.0.0.0", "170.1.0.0"), 65536);
    console.log(ipsBetween("50.0.0.0", "50.1.1.1"), 65793);
    console.log(ipsBetween("180.0.0.0", "181.0.0.0"), 16777216);
    console.log(ipsBetween("1.2.3.4", "5.6.7.8"), 67372036);
    console.log(ipsBetween("0.0.0.0", "255.255.255.255"), 2 ** 32 - 1);
})()