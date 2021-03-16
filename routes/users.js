import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 29
  },
  {
    firstName: "Johnson",
    lastName: "Phan",
    age: 24
  },

]

router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  users.push(req.body);
  console.log(users);
  res.send(req.body);
})

export default router;