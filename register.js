import { Controller } from "./class.js";
const controller = new Controller;
const registerForm = document.querySelector("#register");
const regUserName = document.querySelector("#regUserName")
const regPassword = document.querySelector("#regPassword");



registerForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    controller.register(regUserName.value, regPassword.value);

    // let users = JSON.parse(localStorage.getItem("users")) || [];

    // if (users.find(user => user.username === regUserName.value)) {
    //     alert("Username already exist!");
    //     return;
    // }

    // users.push(new User(regUserName.value, regPassword.value))

    // localStorage.setItem("users", JSON.stringify(users))
    // alert("User successfully created");

    // window.location = "./login.html";

})