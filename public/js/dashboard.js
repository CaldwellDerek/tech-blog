const linkContainer = document.querySelector(".nav-links");

const homeListItem = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent="Home";
homeListItem.append(homeLink);

const logoutListItem = document.createElement("li");
const logoutLink = document.createElement("a");
logoutLink.setAttribute("href", "#");
logoutLink.setAttribute("class", "logout");
logoutLink.textContent="Logout";
logoutListItem.append(logoutLink);

linkContainer.appendChild(homeListItem);
linkContainer.appendChild(logoutListItem);

homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
})

// logoutLink.addEventListener("click", (e)=> {
//     e.preventDefault();
//     location.href="/login";
// })