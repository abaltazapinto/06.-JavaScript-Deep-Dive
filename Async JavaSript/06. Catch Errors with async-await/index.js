// const { error } = require("console");

// async function runAsync(){
//     try {
//         await Promise.reject('Opps!');
//     }
//     catch (e) {
//         console.error(error)
        
//     }
    
// }


// runAsync();

async function getGithubUser(username){
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        alert('Could not find the user, please check the username')
        console.error('Error: ', error)
    }
}

getGithubUser('abaltazapinto');
getGithubUser('randomly');