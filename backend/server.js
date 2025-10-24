// Entry point for backend
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server đang chạy!');
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
