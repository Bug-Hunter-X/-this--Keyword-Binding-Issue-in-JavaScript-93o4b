function myFunc() {
  console.log(this);
}

const obj = {
  myFunc: myFunc.bind(obj) // bind 'this' to obj
};

obj.myFunc(); // this now correctly refers to obj

//Alternative using arrow function:

const obj2 = {
  myFunc: () => {
    console.log(this); // this will refer to the surrounding scope
  }
};

obj2.myFunc();