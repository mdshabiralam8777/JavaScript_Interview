// Promises--------------------------------------------------------------------
let p = new Promise((resolve, reject) => {
  //p is the variable that represent the promise.
  let a = 1 + 2 + 7;
  if (a == 3) {
    resolve("Mission Accomplished....Hurray!");
  } else {
    reject("Mission Failed....Busted");
  }
});

p.then((message) => {
  console.log("This is in the then \n" + message);
}).catch((message) => {
  console.log("This is in the catch \n" + message);
});

let p1 = new Promise((resolve, reject) => {
  resolve("Promise one working fine");
});
let p2 = new Promise((resolve, reject) => {
  resolve("Promise two working fine");
});
let p3 = new Promise((resolve, reject) => {
  resolve("Promise three working fine");
});
Promise.all([p1, p2, p3]).then((message) => {
  console.log(message);
});
Promise.race([p1, p2, p3]).then((message) => {
  console.log(message); //Promise one working fine
});

// ------------------------------Promise done-----------------------------------------------
//Rest Parameter in JavaScript.
var arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);
sum = (...numbers) => {
  return numbers.reduce((x, y) => {
    //x=previous value, y=current value
    return x + y; // can apply any mathematical operator here......(-,*,/,5,+)
  });
};
console.log("Output for RestParam = " + sum(1, 2, 3, 4, 5, 6, 7));

// SpreadOperator---------------------------------------------------------------
//var arr = [1, 2, 3, 4, 5, 6, 7];
sum = (a, b, c, d, e, f, g) => {
  return a + b + c + d + e + f + g;
};
console.log("Output for Spread Syntax = " + sum(...arr1));
var arr1 = [1, 2, 3];
var arr2 = [11, 22, 33];
var arr3 = [...arr1, ...arr2];
console.log(
  "The Spread Opr can concat array like this \n" + arr3.concat(44, 55, [0, -1])
);
//End of Spread and rest ---------------------------------------------------------------

//Apply and Call example---------------------------------------------------------------
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log("aplly accept array of args \n" + max);
// expected output: 7

const min = Math.min.call(5, 6, 2, 3, 7, 0, -1, -22, 2178936);

console.log("Call Accept arg list as u can see \n" + min);
// expected output: 2

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info("Apply eg2 = " + array); // ["a", "b", 0, 1, 2]
// -------------------------------------------------------------------

// ES6 version classes
class Student {
  constructor(name, rollNumber, grade, section) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails() {
    return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
  }
}

let student2 = new Student("Shabbir", 04, "B.Tech", "A");
// student2.getDetails();
console.log(student2.getDetails());
// console.log(student2)
console.log(student2.name);
console.log(student2.rollNumber);
console.log(student2.grade);
console.log(student2.section);
//----------------------------------
// x = 23; // Gives reference error
// let x;
// function anotherRandomFunc() {
//   message = "Hello"; // Throws a reference error

//   let message;
// }
// anotherRandomFunc();
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard: 1,
};

const {
  strength: classStrength,
  benches: classBenches,
  blackBoard: classBlackBoard,
} = classDetails;
console.log("Object Destructuring output");
console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1
// ---------------------------------Generator func --------------------------------------
function* genFunc() {
  yield 3;
  yield 4;
}
genFunc();
let gen1 = genFunc();
console.log(gen1.next());
console.log(gen1.next());
// console.log(gen1.next());
// ---------------------------------WeakSet-----------------------------------------

const ws = new WeakSet();
const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1));
ws.delete(obj2);
console.log(ws.has(obj2));
const obj3 = { one: 1, two: 2, three: 3, four: 4 };
ws.add(obj3);
console.log(ws.has(obj3)); //true
ws.add(obj3);

// -------------- Set --------
var ar = [11, 22, 33, 11, 22];
const s = new Set();
s.add(1);
s.add(0);
s.add("a");
s.add("a");
s.add(ar);
s.add(ar);
console.log(s);

//----------------------------------Arrow Function---------------------------------------------------

let area = (l, b) => {
  return l * b;
};
console.log(area(3, 5) + " sq.cm");

circle = (r) => 3.14 * r * r;
console.log(circle(10));
// one parameter/arg doesn't need any () after function name
// -----------------------Template  literal-----------------------------------------

let name = "Shabbir";
let joke = "Just Kidding";
console.log("This PC belongs to " + name + " He is a good guys " + joke); //OLD fashioned;

// New wayu of writing code Using Template  literal
console.log(`This PC belongs to ${name} and he's a goog guys ${joke}`);

// =====================================Inheritance and class==========================================
class person {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
  getWeight() {
    console.log(this.weight);
  }
}
class developer extends person {
  constructor(name, age, weight, language) {
    super(name, age, weight);
    this.language = language;
  }
  getLang() {
    console.log(this.language);
  }
}

let person1 = new person("Rishab", 24, 65);
person1.getWeight();
person1.getName();
person1.getAge();
let person2 = new developer("Shabir", 23, 70, "Angular");
person2.getAge();
person2.getLang();
person2.getName();

// -----------------------Hoisting-------------------------------------
a = 500;
console.log(a);
var a;

b = 100;
c = 500;
sum = (b, c) => {
  return a + b;
};
//**Note - Variable initializations are not hoisted, only variable declarations are hoisted:
console.log(sum(b, c));
var b, c;
// -----------------------Object======================================================
var people = {
  fName: "Shabir",
  lName: "Alam",
  greet: function () {
    return "Hi Shabir. What are you Upto ?";
  },
  address: {
    street: "102 Collin Street",
    landmark: "Salauddin Tower",
    pin: 700016,
    city: "Kolkata",
    state: "West Bengal",
    welcome: function () {
      return "AssalamuAlaikum Brother!";
    },
  },
};
console.log(people.fName);
console.log(people.lName);
console.log(people.greet());
var ans = people.address.landmark;
console.log(ans);
console.log(people.address.pin);
console.log(people.address.city);
console.log(people.address.welcome());
console.log(people["lName"]);
// ===========================IIFE==================================

var iife = "Sasuke Uchiha";
(function () {
  var iife = "Naruto";
  console.log(iife);
})();
console.log(iife);
// =================================================================
typeof "John Doe"; // Returns "string"
typeof 3.14; // Returns "number"
typeof true; // Returns "boolean"
typeof 234567890123456789012345678901234567890n; // Returns bigint
typeof undefined; // Returns "undefined"
typeof null; // Returns "object" (kind of a bug in JavaScript)
typeof Symbol("symbol"); // Returns Symbol

// Nested Function
function add1(a, b) {
  function add2(c, d) {
    function add3(e, f) {
      function add4(g, h) {
        console.log(
          "The Nested function outpiut = ",
          a + b + c + d + e + f + g + h
        );
      }
      add4(1, 2);
    }
    add3(3, 4);
  }
  add2(5, 6);
}
add1(7, 8);
// 1+2+3+4+5+6+7+8 = 36
// Array Cloning
let original = [1, 2, 3, 4, 5];
let copy = original;
console.log(original, copy);
copy.push(8);
console.log(original, copy);
//  The above way of cloning wont work since JS pass reference value
let newCopy = original.slice();
// newCopy.push(54); this will work as well
newCopy = [...original, 876];
console.log(newCopy, original);

// Object
let object1 = {
  first: "Shabir",
  last: "Alam",
};
console.log(object1);
console.log(Object.keys(object1));
console.log(Object.values(object1));
// Adding new values in an object.
object1["address"] = "KOlkata";
// can add this way as well
object1.age = 18;
console.log(object1);
Object.assign(object1, { dob: "22/10/1998" });
console.log(object1);
let pair1 = { lang: "English" };
object1 = { ...object1, ...pair1 };
// merge(object1,pair1);
console.log(object1);
// ==================
//  Prototype Inheritance in Object
let ob1 = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(ob1);
let ob2 = Object.create(ob1);
console.log(ob2); // It will be empty
// when we do like this (below)
console.log("Ob2 Output : ", ob2.a, ob2.b, ob2.c); //10 20 30
console.log(ob1 == ob2); //Will give false
console.log(ob2.__proto__ == ob1); // true ,due to prototype in heritance

let str = "Asdasd"; // 3 levels from null
let num = 233; // 3 levels from null
let bool = true; // 3 levels from null
let arr = [246, 436, 6, 346]; // 3 levels from null
let obj = { a: 10, b: "asdasd" }; // 2 levels from null
let fun = function () {
  console.log("yay!");
}; // 3 levels from null

// if x and y are not primitive
// x == y : true <- what does this mean ?
// this means they are reference to the same object in memory

console.log("======= types =======");
console.log("typeof String", typeof String);
console.log("typeof Boolean", typeof Boolean);
console.log("typeof Number", typeof Number);
console.log("typeof Array", typeof Array);
console.log("typeof Object", typeof Object);
console.log("typeof Function", typeof Function);

console.log("======= proto chain =======");
console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(fun.__proto__.__proto__ == obj.__proto__);

// Everything indirectly inherits from the same thing
// that obj is inherited from
// i.e. in Javascript, everything is essentially an Object

console.log("======= prototypes ======= ");
console.log(obj.__proto__ == Object.prototype);
console.log(str.__proto__ == String.prototype);
console.log(num.__proto__ == Number.prototype);
console.log(bool.__proto__ == Boolean.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(fun.__proto__ == Function.prototype);

// String.prototype inherits from Object.prototype

// typeof Object.create(Boolean.prototype) -> ??
