const axios = require('axios');

function promise() {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const dataFalse = response.data.filter(todo => todo.completed === false);
        const topten = dataFalse.slice(0, 10);
        resolve(topten);
      })
      .catch(error => {
        if (error.response) {
          reject(new Error(`Tidak ada respon dari API`));
        }
      });
  });
}
// menggunakan error handling karena untuk mengecek apakah ada permintaan yang tidak direspon oleh API atau tidak

promise()
  .then(dataFalse => console.log(dataFalse))
  .catch(error => console.error(error));