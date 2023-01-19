
let submitButton = document.getElementById("submit");
let database = [];

function clearFields(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
};

function student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
};

submitButton.addEventListener("click", function(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let newStudent = new student(firstName, lastName, age, email);
    database.push(newStudent);
    console.log(database);
    clearFields();
});
