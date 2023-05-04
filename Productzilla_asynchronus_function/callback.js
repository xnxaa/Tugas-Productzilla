const axios = require('axios');

function Callback(callback) {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const completed = response.data.filter((todo) => todo.completed);
      const topten = completed.slice(0, 10);
      callback(topten);
    })
    .catch((error) => {
      console.log(error);
    });
    // menggunakan 'catch' karena ingin menangkap error dan menampilkan pesan error
}

Callback((data) => {
  console.log(data);
});