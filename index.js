const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let ages = [25, 30, 18, 22, 27];
let student = [
  { name: 'Rahul', rollNo: 101, marks: 85 },
  { name: 'Sita', rollNo: 102, marks: 95 },
  { name: 'Amit', rollNo: 103, marks: 70 },
];
let cars = [
  { make: 'Maruti', model: 'Swift', mileage: 15 },
  { make: 'Hyundai', model: 'i20', mileage: 18 },
  { make: 'Tata', model: 'Nexon', mileage: 20 },
];

function getSortedAscending(ages) {
  let agesCopy = ages.slice();
  let sortAscend = agesCopy.sort((a, b) => a - b);
  return sortAscend;
}

function getSortedDescending(ages) {
  let agesCopy = ages.slice();
  let sortDescend = agesCopy.sort((a, b) => b - a);
  return sortDescend;
}

function marksDesc(student) {
  let studentsCopy = student.slice();
  let marksDescStudents = studentsCopy.sort((a, b) => b.marks - a.marks);
  return marksDescStudents;
}

function sortCarsDesc(cars) {
  let carsCopy = cars.slice();
  let sortedCars = carsCopy.sort((a, b) => b.mileage - a.mileage);
  return sortedCars;
}

app.get('/ages/sort-ascending', (req, res) => {
  let result = getSortedAscending(ages);
  res.json(result);
});

app.get('/ages/sort-descending', (req, res) => {
  let result = getSortedDescending(ages);
  res.json(result);
});

app.get('/students/sorted-by-marks-descending', (req, res) => {
  let descMarks = marksDesc(student);
  res.json(descMarks);
});

app.get('/cars/sort-by-mileage-descending', (req, res) => {
  let sortedCars = sortCarsDesc(cars);
  res.json(sortedCars);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
