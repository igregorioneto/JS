function add(a, b) {
    let carry = 0
    let result = []
    if (b.length > a.length) {
        [a,b] = [b,a]
    }
    b = b.padStart(a.length, '0')
    for (let i = a.length -1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + carry
        carry = Math.floor(sum / 10)
        result.push(sum % 10)        
    }
    if (carry) {
        result.push(carry)
    }
    return result.reverse().join('')
}

; (() => {
    console.log(add("1", "1"), "2");
    console.log(add("123", "456"), "579");
    console.log(add("888", "222"), "1110");
    console.log(add("1372", "69"), "1441");
    console.log(add("12", "456"), "468");
    console.log(add("101", "100"), "201");
    console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
})()