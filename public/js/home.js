async function sessionStatus() {
    const linkContainer = document.querySelector(".nav-links");
    const response = await fetch("/sessions");
    const session = await response.json();
    if (session.username){
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

        linkContainer.appendChild(dashboardListItem);
        linkContainer.appendChild(logoutListItem);  
        
        dashboardLink.addEventListener("click", (e)=> {
            e.preventDefault();
            location.href="/dashboard";
        })

        logoutLink.addEventListener("click", async (e)=> {
            e.preventDefault();

            const logout = await fetch("/api/users/logout");

            location.href="/login";
        })
    } else {
        const loginListItem = document.createElement("li");
        const loginLink = document.createElement("a");
        loginLink.setAttribute("href", "#");
        loginLink.setAttribute("class", "login");
        loginLink.textContent="Login";
        loginListItem.append(loginLink);

        const signupListItem = document.createElement("li");
        const signupLink = document.createElement("a");
        signupLink.setAttribute("href", "#");
        signupLink.setAttribute("class", "signup");
        signupLink.textContent="Sign Up";
        signupListItem.append(signupLink);

        linkContainer.appendChild(loginListItem);
        linkContainer.appendChild(signupListItem);

        loginLink.addEventListener("click", (e)=> {
            e.preventDefault();
            location.href="/login";
        })

        signupLink.addEventListener("click", (e)=> {
            e.preventDefault();
            location.href="/signup";
        })
    }
}

sessionStatus();

document.querySelectorAll(".post").forEach(element => {
    element.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.className === "post"){
            const id = e.target.getAttribute("data-id");
            const goToComments = await fetch(`/comments/${id}`);
        }
    })
})