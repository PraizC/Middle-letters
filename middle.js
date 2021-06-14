let word = prompt('Enter any word of odd length. Length of word must be greater than or equal to 3');
let sp1 = parseInt((word.length)-3)/2
let sp2 = parseInt(((word.length)-3)/2) + 3;
if (word.length %2 != 0 || word.length == 3) {
    let newWord = word.slice(sp1 , sp2);
    alert(newWord);
} else {
    alert('Error!')
}