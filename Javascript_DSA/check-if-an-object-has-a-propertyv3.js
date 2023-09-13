let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line

  let userArr = ["Alan", "Jeff", "Sarah", "Ryan"];
  for(let i = 0; i < userArr.length; i++) {
    if(userObj.hasOwnProperty(userArr[0]) && userObj.hasOwnProperty(userArr[1]) &&userObj.hasOwnProperty(userArr[2]) && userObj.hasOwnProperty(userArr[3])) {
      return true;
    }
    return false;
  }  


  // Only change code above this line
}

console.log(isEveryoneHere(users));