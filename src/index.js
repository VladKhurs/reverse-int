module.exports = function reverse (n) {
    let ans = ''
    for (let i = 0; i <= (String(n).length + 1); i++) {
        ans += n % 10
        n = Math.floor(n / 10)
    }
    ans = Number(ans)
    return ans
}
