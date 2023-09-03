const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let countOnline = 0;
  const isOnlineTrue = true
  for(const userList in allUsers) {
    if(allUsers[userList]["online"] === isOnlineTrue) {
       countOnline++;
    }
  }
  return countOnline;
}
  // Only change code above this line


console.log(countOnline(users));