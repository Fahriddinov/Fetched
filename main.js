let body = document.querySelector("body");
let input = document.querySelector(".input");
let dark = document.querySelector(".dark");
let result = document.querySelector(".result");
let seach = document.querySelector(".seach");

function renderUsers(users) {
    result.innerHTML = "";
    users.forEach(user => {
        let userDiv = document.createElement("div");
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h2>${user.firstName + " " + user.lastName}</>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Phone: ${user.address.address}</p>
        `;
        result.appendChild(userDiv);
    });
}

dark.addEventListener("click", () => {
    body.classList.toggle("darkm");
    dark.classList.toggle("darkb");
    userDiv = document.querySelectorAll(".user");
    userDiv.forEach(user => {
        user.classList.toggle("darku");
    });
});

fetch("https://dummyjson.com/users")
.then(response => response.json())
.then(data => renderUsers(data.users));

input.addEventListener("input", () => {
    fetch(`https://dummyjson.com/users/search?q=${input.value}`)
    .then(response => response.json())
    .then(data => renderUsers(data.users));
});