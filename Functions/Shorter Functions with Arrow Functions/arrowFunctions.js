// => 

const username = 'andré'

const capitalize = (name) =>
    `${name.charAt(0).toUpperCase()}${name.slice(1)}`

console.log(capitalize(username))

function greetUser(name, callback) {
    return callback(capitalize(name));  
  }
  
const result =  greetUser(username, (name) => {
      const now = new Date();
      const day = now.getDay();
  
      return `today is the day ${now}, mr.${name} `;
  });


  greetUser(username, () => {
    console.log(result);
  }); 