import express from 'express';
import employees from '#db/employees'

const app = express();

app.get(`/`, (request, response) => {
  response.send(`Hello employees!`)
});

app.get(`/employees`,(request, response) => {
  response.send(employees)
});

app.get(`/employees/random`, (request, response) => {
  const randomNum = Math.floor(Math.random() * employees.length);
  response.send(employees[randomNum])
})

app.get(`/employees/:id`, (request, response) => {
  const { id } = request.params;
  const index = Number(id) -1

  if(!employees[index]) {
    response.status(404)
  }
  console.log(typeof id)
  response.send(employees[index])
})


export default app