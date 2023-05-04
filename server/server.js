const express = require("express");
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker")

const userObject = () => ({
    employeeId: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const compObject = () => ({
    companyId: faker.datatype.number(),
    companyName: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
});

app.get("/api/users/new", (req, res) => {
  res.json(userObject())
});

app.get("/api/companies/new", (req, res) => {
  res.json(compObject())
});

app.get("/api/user/company", (req, res) => {
  res.json({user: userObject(), company: compObject()})
});

app.listen(port, () => console.log(`Listening on port: ${port}`));