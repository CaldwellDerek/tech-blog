// Link creation
async function sessionStatus() {
    const linkContainer = document.querySelector(".nav-links");
    const response = await fetch("/sessions");
    const session = await response.json();
    if (session.username){

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
    } else {
        location.href="/login";
    }
}
sessionStatus();


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