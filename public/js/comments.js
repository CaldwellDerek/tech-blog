document.querySelector("#new-comment-form").addEventListener("submit", (e)=> {
    e.preventDefault();
    const comment = document.querySelector("#comment").value;

    console.log(comment);
})