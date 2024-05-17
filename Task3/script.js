function reverseTheNumber(num) {
    let currStr = num.toString();
    return parseInt(currStr.split("").reverse().join(""));
    
}
console.log(reverseTheNumber(149));