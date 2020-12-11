var faker = require('faker');

var database = { users: []};
var profils= ["FORMATEUR","CM","APPRENANT","ADMIN"]

for (var i = 1; i<= 4; i++) {
  database.users.push({
    id: i,
    lastname: faker.name.firstName() ,
    firstname: faker.name.lastName(),
    password: faker.internet.password(12),
    avatar: "https://source.unsplash.com/1600x900/?product",
    email: faker.internet.email() ,
    username: faker.internet.userName() ,
    role: "ROLE_"+profils[i-1] ,

  });
}

console.log(JSON.stringify(database));
