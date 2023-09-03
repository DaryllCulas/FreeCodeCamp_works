let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  let friendsArray = userObj.data.friends;
  let friendExists = false;

  for (let i = 0; i < friendsArray.length; i++) {
    if (friendsArray[i] === friend) {
      friendExists = true;
      break;
    }
  }

  if (!friendExists) {
    friendsArray.push(friend);
  }

  return friendsArray;
}

console.log(addFriend(user, 'Pete'));
