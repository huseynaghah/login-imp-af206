import { Controller } from "./class.js";

const controller = new Controller;

const loginForm = document.querySelector("#login");
const logUserName = document.querySelector("#logUserName");
const logPassword = document.querySelector("#logPassword");

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    controller.login(logUserName.value, logPassword.value);
    // let users = JSON.parse(localStorage.getItem("users")) || [];

    // let selectedUser = users.find(user => user.username === logUserName.value);

    // if (!selectedUser) {
    //     alert("User not found!")
    //     return;
    // }

    // if (selectedUser.password != logPassword.value) {
    //     alert("Pasword is not correct");
    //     return;
    // }

    // localStorage.setItem("currentUser", selectedUser.username);
    // alert("Successful log in!");
    // window.location = "./";
 

    
})