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
