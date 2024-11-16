export class User {
    constructor(username, password){
        this.username = username;
        this.password = password
    }
}

export class Controller{
    #users = JSON.parse(localStorage.getItem("users")) || [];

    register(username, password){
        if (this.#users.find(user => user.username === username)) {
            alert("Username already exist!");
            return;
        }
    
        this.#users.push(new User(username, password));
    
        localStorage.setItem("users", JSON.stringify(this.#users))
        alert("User successfully created");
    
        window.location = "./login.html";
    }

    login(username, password){
        let selectedUser = this.#users.find(user => user.username === username);

        if (!selectedUser) {
            alert("User not found!")
            return;
        }
    
        if (selectedUser.password != password) {
            alert("Pasword is not correct");
            return;
        }
    
        localStorage.setItem("currentUser", selectedUser.username);
        alert("Successful log in!");
        window.location = "./";
    }


    logout(){
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
}