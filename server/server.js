const express = require("express");
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker")

const userObject = () => {
  const newUser = {
    employeeId: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newUser
};
const newUserObject = userObject();
console.log(newUserObject);

const compObject = () => {
  const newComp = {
    companyId: faker.datatype.number(),
    companyName: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newComp
};
const newCompObj = compObject();
console.log(newCompObj);

const userComp = {
  ...newUserObject,
  ...newCompObj
};
console.log(userComp);

app.get("/api/users/new", (req, res) => {
  res.json(newUserObject)
});

app.get("/api/companies/new", (req, res) => {
  res.json(newCompObj)
});

app.get("/api/user/company", (req, res) => {
  res.json(userComp)
});




app.listen(port, () => console.log(`Listening on port: ${port}`));