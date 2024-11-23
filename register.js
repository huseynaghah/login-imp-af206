// import { Controller } from "./class.js";
// const controller = new Controller;
const registerForm = document.querySelector("#register");
const regUserName = document.querySelector("#regUserName")
const regPassword = document.querySelector("#regPassword");

let userState = [];

async function getAllUsers() {
    try {
        let response =await axios.get('http://localhost:3000/users/');
        console.log(response);
        userState = response.data;
    } catch (error) {
        alert("Network error occured!", error)
    }
  
}


// document.addEventListener('DOMContentLoaded', getAllUsers);
// getAllUsers();

registerForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    // controller.register(regUserName.value, regPassword.value);
    // let users = JSON.parse(localStorage.getItem("users")) || [];

    
    await getAllUsers();

    

    if (userState.find(user => user.username === regUserName.value)) {
        alert("Username already exist!");
        return;
    }

    // users.push(new User(regUserName.value, regPassword.value))

    // localStorage.setItem("users", JSON.stringify(users))
    try{
        let response = await axios.post('http://localhost:3000/users/' , {username : regUserName.value, password : regPassword.value});
        alert("User successfully created");
        window.location = "./login.html";
    } catch(error){
        alert(error);
    }





})