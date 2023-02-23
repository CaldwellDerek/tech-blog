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

logoutLink.addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/api/users/logout");

    location.href="/login";
})

document.querySelector(".new-post").addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector("#new-post-form").style.display = "block";
})

document.querySelector("#new-post-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    title = document.querySelector("#title").value;
    content = document.querySelector("#content").value;

    if (!title && !content){
        return window.alert("Please enter a value for both title and content.");
    }

    const postContent = {
        title: title,
        content: content
    }

    const newPost = await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify(postContent),
        headers: {
            "Content-Type":"application/json"
        }
    });

    if (newPost.ok){
        location.href="/dashboard";
    } else {
        window.alert("An error has occurred, please try again.");
    }

    document.querySelector("#new-post-form").style.display = "none";
})

document.querySelectorAll(".post").forEach(element => {
    element.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.className === "post"){
            const id = e.target.getAttribute("data-id")

            const deleteBody = {
                id: id
            }

            if (window.confirm("Would you like to continue with deleting this post?")){
                const deletePost = await fetch("/api/posts", {
                    method: "DELETE",
                    body: JSON.stringify(deleteBody),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                location.reload();
            }

            const toUpdate = window.prompt("Would you like to update this post?");

            const updateBody = {
                id: id,
                post: toUpdate
            }

            if (toUpdate){
                const updatePost = await fetch("/api/posts", {
                    method: "PUT",
                    body: JSON.stringify(updateBody),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                location.reload();
            }
        }
        
    })
})