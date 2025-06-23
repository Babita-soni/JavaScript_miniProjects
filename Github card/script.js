document.querySelector('button').addEventListener('click', fetchUser);

function fetchUser(){
    const username = document.querySelector('input').value.trim(); // trim to remove spaces

    if (!username) {
        alert("Please enter a GitHub username.");
        return;
    }

    const reqUrl = `https://api.github.com/users/${username}`
    const xhr = new XMLHttpRequest();

    xhr.open('GET', reqUrl)

    xhr.onreadystatechange = function(){
        //console.log(xhr.readyState);
        if(xhr.readyState==4){
            if(xhr.status === 200){
                document.querySelector('.card').style.display = "flex";
                data = JSON.parse(this.responseText);
                console.log(data);
                const avatar = data.avatar_url;
                // console.log(avatar);
                const bio = data.bio;
                // console.log(bio);
                const name = data.name;
                // console.log(name);
                const followers = data.followers;
                // console.log(followers);
                const following = data.following;
                // console.log(following);
                const createdAt = data.created_at;
                // console.log(createdAt);
                
                document.getElementsByClassName('profilePic')[0].innerHTML = `<img src="${avatar}">`
                document.querySelector('h1').innerHTML = ` ${bio ? bio : "No Bio available"}`;
                document.getElementsByClassName('name')[0].innerHTML = `<span class="heading">Name:</span> ${name ? name : "NA"}`
                document.getElementsByClassName('followers')[0].innerHTML = `<span class="heading">Followers:</span> ${followers}`
                document.getElementsByClassName('following')[0].innerHTML = `<span class="heading">Following:</span> ${following}`
                document.getElementsByClassName('since')[0].innerHTML = `<span class="heading">Created on:</span> ${new Date(createdAt).toDateString()}`
                document.querySelector('.link').innerHTML = `Check <a href="https://github.com/${username}?tab=repositories" target="_blank">repositories</a>`
            }
            else{
                alert("User not found.")
            }
        }
    }
    xhr.send();
}
