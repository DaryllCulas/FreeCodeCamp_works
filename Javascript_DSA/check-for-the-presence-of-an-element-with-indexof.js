function quickCheck(arr, elem) {
  // Only change code below this line

    for(let i = 0; i <= arr.length; i++) {
        if(arr.indexOf(elem) === arr[i] || arr.indexOf(elem) === i) {
            return true;
        } else {
            return false;
        }
    }
    
    
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushroom'));