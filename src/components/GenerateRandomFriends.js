// const faker = require('faker');

// const GenerateRandomFriends = (count) => {
//   const friends = [];

//   for (let i = 0; i < count; i++) {
//     const friend = {
//       id: faker.datatype.uuid(),
//       name: faker.name.findName(),
//       age: faker.datatype.number({ min: 18, max: 70 }),
//       email: faker.internet.email(),
//     };

//     friends.push(friend);
//   }

//   return friends;
// };

// const randomFriends = GenerateRandomFriends(200);
// console.log(randomFriends);

// export default GenerateRandomFriends;



// import faker from 'faker';
import faker from 'faker';

function generateRandomFriend() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    // інші властивості друзя
  };
}

// Експорт функції для генерації випадкових друзів
export default function GenerateRandomFriends(count) {
  const friends = [];
  for (let i = 0; i < count; i++) {
    friends.push(generateRandomFriend());
  }
  return friends;
}

