function sumStrings(a,b) { 

    var aa = Array.from(a, Number),
        bb = Array.from(b, Number),
        result = [],
        carry = 0,
        i = Math.max(a.length, b.length);
        console.log(aa, bb)
        
    while (i--) {
        carry += (aa.pop() || 0) + (bb.pop() || 0);
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    while (carry) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return result.join('');
}