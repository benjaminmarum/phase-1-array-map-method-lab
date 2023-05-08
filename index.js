const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

//========================================================================================================================>
//Examples
//Map with declared function 
function studentRollCall(student) {
  return student + " the skier";
}

const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(studentRollCall);

//Map with function expression
const skiSchool2 = ["aki", "guadalupe", "lei", "aalam"];
const rollCall2 = skiSchool2.map(function (student) {
  return student + " the skier";
});

//Map with arrow function
const skiSchool3 = ["aki", "guadalupe", "lei", "aalam"];
const rollCall3 = skiSchool3.map((student) => student + " the skier");

//Map with data structures
const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});


//========================================================================================================================>

function titleCased() {
  let wordArray = tutorials.map((string) => {
    const stringArray = string.split(" ")
    const capWordsArray = stringArray.map(word => word[0].toUpperCase() + word.slice(1))
    return capWordsArray.join(" ");
  })
  return wordArray
};
