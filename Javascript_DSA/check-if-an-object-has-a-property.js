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
    let userList = ['Alan', 'Jeff', 'Sarah', 'Ryan'];

    for(let i = 0; i < userList.length; i++) {
        if(userObj.hasOwnProperty(userList[0]) && userObj.hasOwnProperty(userList[1]) &&
         userObj.hasOwnProperty(userList[2]) &&  userObj.hasOwnProperty(userList[3])) {

               return true;

        } if(userObj.hasOwnProperty(userList[i])) {
                return false;
            }
    }
    
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));