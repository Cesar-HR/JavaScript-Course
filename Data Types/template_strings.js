let name = "Cesar";
let lastname = "Hidalgo";

/* concatenation */
let greet = "Hello, my name is " + name + " " + lastname;
console.log(greet);

/* interpolation  */
let greet_2 = `Hello, my name is ${name} ${lastname}`;
console.log(greet_2);

let table = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
console.log(table);

let table_template_string = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;
console.log(table_template_string);
