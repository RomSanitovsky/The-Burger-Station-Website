const faker = require('faker');
const fs = require('fs');

const user = {};
const userArray = [];

for (let i = 0; i < 100; i += 1) {
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.passwordConfirm = user.password;
  userArray[i] = { ...user };
}

fs.writeFile(`./imports/Userdata.json`, JSON.stringify(userArray), (err) => {
  if (err) throw err;
});
