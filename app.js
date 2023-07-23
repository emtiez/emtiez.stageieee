const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Define a route to render the template
app.get('/', (req, res) => {
    const data = { name: 'emtiez' };
    res.render('index', data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
