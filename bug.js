function myFunc() {
  console.log(this);
}

myFunc(); // this will likely be the window object or undefined in strict mode

const obj = {
  myFunc: myFunc
};

obj.myFunc(); // this will correctly refer to obj