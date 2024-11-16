import { Controller } from "./class.js";
const controller = new Controller;
const currentUser = localStorage.getItem("currentUser") || null;

let nav = document.querySelector('.navbar');

if (currentUser) {
    nav.innerHTML = `
        <h1>Hello, <span>${currentUser}</span></h1>
        <a href="#" id="logOut">
            Log out !
        </a>
    
    `
    document.querySelector("#logOut").addEventListener('click',()=>{
        // localStorage.removeItem("currentUser");
        // window.location.reload();

        controller.logout();
    })
} else {
    nav.innerHTML = `
            <h1>You are not logged in!</h1>
            <a href="./login.html">
                Sign in!
            </a>
    `
}


