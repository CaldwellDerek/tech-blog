// Link creation
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

// Render previous posts
document.querySelector(".new-post").addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("yup")
    document.querySelector("#new-post-form").style.display = "block";
})


homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
})

logoutLink.addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/api/users/logout");
    if (logout){
        location.href="/login";
    }
})