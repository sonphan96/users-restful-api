import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
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
  }
]

router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(req.body);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id );
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  users = users.filter(user => user.id !== id );
  res.send(users)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = user.find((user) => user.id = id );

  if(firstName) {
    user.firstName = firstName;
  }

  if(lastName) {
    user.lastName = lastName;
  }

  if(age) {
    user.age = age;
  }

  res.send('User has been updated');
})  


export default router;