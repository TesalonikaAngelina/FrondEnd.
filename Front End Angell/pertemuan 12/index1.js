// ambilDataUser.js
function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data.data));
  }
  
  export default ambilDataUser;