const linkContainer = document.querySelector(".nav-links");

const homeListItem = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent="Home";
homeListItem.append(homeLink);

const dashboardListItem = document.createElement("li");
const dashboardLink = document.createElement("a");
dashboardLink.setAttribute("href", "#");
dashboardLink.setAttribute("class", "dashboard");
dashboardLink.textContent="Dashboard";
dashboardListItem.append(dashboardLink);

const logoutListItem = document.createElement("li");
const logoutLink = document.createElement("a");
logoutLink.setAttribute("href", "#");
logoutLink.setAttribute("class", "logout");
logoutLink.textContent="Logout";
logoutListItem.append(logoutLink);

linkContainer.appendChild(homeListItem);
linkContainer.appendChild(dashboardListItem);
linkContainer.appendChild(logoutListItem); 

homeLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/";
})

dashboardLink.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="/dashboard";
})

logoutLink.addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/api/users/logout");

    location.href="/login";
})

document.querySelector("#new-comment-form").addEventListener("submit", async (e)=> {
    e.preventDefault();
    const comment = document.querySelector("#comment").value;

    const newPost = {
        comment: comment,
        post_id: document.querySelector(".post").getAttribute("data-id")
    }

    const submitPost = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (submitPost.ok){
        location.reload();
    } else {
        window.alert("An error occurred submitting your comment, please try again.");
    }
})