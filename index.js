const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Error' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
