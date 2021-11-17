const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.static(`${__dirname}/src`));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});
