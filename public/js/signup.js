const linkContainer = document.querySelector(".nav-links");

const homeListItem = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent="Home";
homeListItem.append(homeLink);

const loginListItem = document.createElement("li");
const loginLink = document.createElement("a");
loginLink.setAttribute("href", "#");
loginLink.setAttribute("class", "login");
loginLink.textContent="Login";
loginListItem.append(loginLink);

linkContainer.appendChild(homeListItem);
linkContainer.appendChild(loginListItem);

homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
})

loginLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/login";
})

document.querySelector("#signup-form").addEventListener("submit", async (e)=> {
    e.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if (!username.value || !password.value){
        return window.alert("Please make sure both the username and password fields have values.");
    } else if (password.value.length < 8){
        return window.alert("Your password must be at least 8 characters long.");
    }

    const newUser = {
        username: username.value,
        password: password.value
    }

    const postUser = await fetch("/api/users", {
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