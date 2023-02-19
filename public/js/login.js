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

