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
//  if(userObj.hasOwnProperty('Alan') === true && userObj.hasOwnProperty('Jeff') === true && userObj.hasOwnProperty('Sarah') === true && userObj.hasOwnProperty('Ryan') === true) {
//    return true;
//  }
//  return false;

let userList = userObj.hasOwnProperty('Alan') === true && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan');

userList in userObj;

return userList;
  // Only change code above this line
}

console.log(isEveryoneHere(users));