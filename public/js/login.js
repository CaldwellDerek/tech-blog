const linkContainer = document.querySelector(".nav-links");

const homeListItem = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent="Home";
homeListItem.append(homeLink);

const signupListItem = document.createElement("li");
const signupLink = document.createElement("a");
signupLink.setAttribute("href", "#");
signupLink.setAttribute("class", "signup");
signupLink.textContent="Sign Up";
signupListItem.append(signupLink);

linkContainer.appendChild(homeListItem);
linkContainer.appendChild(signupListItem);

homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
})

signupLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/signup";
})

document.querySelector(".signup-link").addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/signup";
})

document.querySelector("#login-form").addEventListener("submit", async (e)=> {
    e.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if (!username.value || !password.value){
        return window.alert("Please make sure both the username and password fields have values.");
    }

    const newUser = {
        username: username.value,
        password: password.value
    }

    const postUser = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (postUser.ok){
        location.href="/dashboard"
    } else {
        return window.alert("An error has occurred with signin up. Please try again.");
    }
})