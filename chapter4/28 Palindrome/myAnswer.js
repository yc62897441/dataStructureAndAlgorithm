// palindrome("abcdcba"); // true
// palindrome("abcdeedcba"); // true
// palindrome('abcdbca') // false

function palindrome(str) {
    let left = 0
    let right = str.length - 1
    while (left <= right) {
        if (str[left] === str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}
console.log(palindrome('abcdcba'))
console.log(palindrome('abcdeedcba'))
console.log(palindrome('abcdbca'))
