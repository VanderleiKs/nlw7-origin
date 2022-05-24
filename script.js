const socialLinksUser = {
    gitHub: 'vanderleiks',
    youtube: 'CanalPowertek',
    instagran: 'vanderleiks',
    facebook:  'vanderleiks',
    twitter: 'vanderleiks'
}

function changeSocialLinks(){
    for(let li of socialLinks.children){
        const socialName = li.getAttribute('class');
        li.children[0].href = `https://${socialName}.com/${socialLinksUser[socialName]}`
    }
}

//const socialName = window.prompt('Digite seu nome:');
changeSocialLinks();

function getGithubProfile(){
const url = `https://api.github.com/users/${socialLinksUser.gitHub}`;
 
fetch(url)
.then(response  => response.json())
.then(data => {
    avatarProfile.setAttribute('src', data.avatar_url)
    loginGithub.href = data.html_url
    nameUser.textContent = data.name
    loginUser.textContent = data.login
    descriptionUser.textContent = data.bio
})
}
getGithubProfile();

