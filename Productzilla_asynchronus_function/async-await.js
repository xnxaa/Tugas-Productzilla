const axios = require('axios');

async function asyncAwait() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const completed = response.data.filter((todo) => todo.completed).slice(0, 10);
    const dataFalse = response.data.filter((todo) => !todo.completed).slice(0, 10);
    const todos = [completed, dataFalse];
    return todos;
  } catch (error) {
    console.error(error);
  }
}

(async function() {
  try {
    const todos = await asyncAwait();
    console.log(todos);
  } catch (error) {
    console.error(error);
  }
})();
// menggunakan try catch untuk mengambil data dari API karena request menggunakan asynchronous
