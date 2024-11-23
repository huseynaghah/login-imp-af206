// import { Controller } from "./class.js";

// const controller = new Controller;

const loginForm = document.querySelector("#login");
const logUserName = document.querySelector("#logUserName");
const logPassword = document.querySelector("#logPassword");
let userState = [];

async function getAllUsers() {
    try {
        let response = await axios.get('http://localhost:3000/users/');
        console.log(response);
        userState = response.data;
    } catch (error) {
        alert("Network error occured!", error)

        
    }
  
}


loginForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    // controller.login(logUserName.value, logPassword.value);
    // let users = JSON.parse(localStorage.getItem("users")) || [];

    await getAllUsers();

    let selectedUser = userState.find(user => user.username === logUserName.value);

    if (!selectedUser) {
        alert("User not found!")
        return;
    }

    if (selectedUser.password != logPassword.value) {
        alert("Pasword is not correct");
        return;
    }

    localStorage.setItem("currentUser", selectedUser.id);
    alert("Successful log in!");
    window.location = "./";
 

    
})