function greetings(name) {
  return `Hey, ${name}`;
}

const greetingToNoemi = greetings("Noemi");

function map(array, func) {
  const startingArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = func(array[i], i, array);
    startingArr.push(result);
  }

  return startingArr;
}

function filter(array, func) {
  const startingArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = func(array[i], i, array);
    if (result) {
      startingArr.push(result);
    }
  }

  return startingArr;
}

const students = [
  {
    name: "DANIEL",
    height: 1.9,
    cohort: "WD",
  },
  {
    name: "   Anna           ",
    height: 1.6,
    cohort: "WD",
  },
  {
    name: "ChErYl",
    height: 1.66,
    cohort: "WD",
  },
  {
    name: "Juan",
    height: 1.75,
    cohort: "WD",
  },
  {
    name: "Chris",
    height: 1.8,
    cohort: "WD",
  },
  {
    name: "Marie",
    height: 1.55,
    cohort: "WD",
  },
  {
    name: "Amy",
    height: 1.67,
    cohort: "WD",
  },
  {
    name: "Noemi",
    height: 1.65,
    cohort: "WD",
  },
  {
    name: "Pablo",
    height: 1.79,
    cohort: "WD",
  },
  {
    name: "Martha",
    height: 1.98,
    cohort: "UI",
  },
  {
    name: "Petro Parmigiano",
    height: 1.8,
    cohort: "DT",
  },
];

const normalizedStudentNames = map(students, (element, index, array) => {
  return element.name.toLowerCase().trim();
});

// const normalizedStudentNames = students.map((element, index, array) => {
//   return element.name.toLowerCase().trim();
// });
