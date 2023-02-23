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