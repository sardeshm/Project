const getPost = document
  .getElementById("getPosts")
  .addEventListener("click", getPosts);
const getUser = document
  .getElementById("getUsers")
  .addEventListener("click", getUsers);
const getComment = document
  .getElementById("getComments")
  .addEventListener("click", getComments);
const addPost = document
  .getElementById("addPost")
  .addEventListener("submit", addPosts);

//endpunkt posts
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts") //fetch post
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach(function (post) {
        output += `
        <div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

//endpunkt users
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        //looping
        output += `<ul>
  <li>ID: ${user.id}</li>
  <li>Name: ${user.name}</li>
  <li>Email: ${user.email}</li>
   </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

//endpunkt comments
function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Comments</h2>";
      data.forEach(function (comments) {
        output += `<div>
        <h3>${comments.name} </h3>
        
        <p>${comments.body}</p></div>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

//eigene post

function addPosts(e) {
  e.prevenDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
