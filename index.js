// import { Controller } from "./class.js";
// const controller = new Controller;

let currentUserState = null;

async function getUserById() {
    try {
        const currentUserId = localStorage.getItem("currentUser") || null;

        if (currentUserId) {
            let response = await axios.get(`http://localhost:3000/users/${currentUserId}`);
            currentUserState = response.data;
        }

    } catch (error) {
        console.log(error);
    }

}

await getUserById();

let nav = document.querySelector('.navbar');

if (currentUserState) {
    nav.innerHTML = `
        <h1>Hello, <span>${currentUserState.username}</span></h1>
        <a href="#" id="logOut">
            Log out !
        </a>
    
    `
    document.querySelector("#logOut").addEventListener('click', () => {
        localStorage.removeItem("currentUser");
        window.location.reload();

        // controller.logout();
    })
} else {
    localStorage.removeItem('currentUser');
    nav.innerHTML = `
            <h1>You are not logged in!</h1>
            <a href="./login.html">
                Sign in!
            </a>
    `
}


