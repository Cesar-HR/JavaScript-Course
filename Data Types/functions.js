/* declarative function */
function isFunction() {
  console.log("One");
}

/* callback a function */
isFunction();

function returnStringValue() {
  return "this function returns a string";
}

let valueFunction = returnStringValue();
console.log(valueFunction);

function functionWithValues(name, lastname) {
  console.log(`Good morning!, I'm ${name} ${lastname}`);
}

/* function with defined params */
functionWithValues("Cesar", "Hidalgo");
/* function with undefined params */
functionWithValues(); // If there are not params, the function will return undefined

/* declarative function vs expressed function */
functionDeclarative();
function functionDeclarative() {
  console.log(
    "this is a declarative function, it can be invoke anywhere insisde the code, eventhought before to be created"
  );
}
functionDeclarative();

/* anonymous function */
const expressedFunction = function () {
  console.log(
    "this function is expressed, it means JS doesn't allow to invoke the function before to be initialize"
  );
};

expressedFunction();
