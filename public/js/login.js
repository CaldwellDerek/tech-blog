const linkContainer = document.querySelector(".nav-links");

const homeListItem = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent="Home";
homeListItem.append(homeLink);

linkContainer.appendChild(homeListItem);

homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
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