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

const loginListItem = document.createElement("li");
const loginLink = document.createElement("a");
loginLink.setAttribute("href", "#");
loginLink.setAttribute("class", "login");
loginLink.textContent="Login";
loginListItem.append(loginLink);

const logoutListItem = document.createElement("li");
const logoutLink = document.createElement("a");
logoutLink.setAttribute("href", "#");
logoutLink.setAttribute("class", "logout");
logoutLink.textContent="Logout";
logoutListItem.append(logoutLink);

// linkContainer.appendChild(homeListItem);
// linkContainer.appendChild(dashboardListItem);
linkContainer.appendChild(loginListItem);
// linkContainer.appendChild(logoutListItem);