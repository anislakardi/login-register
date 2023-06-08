const express = require('express');
const app = express();

// Config
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    return res.render('landingpage');
});

app.get('/login', (req, res) => {
    return res.render('loginpage');
});

app.post('/login', (req, res) => {
    const { inputEmail, inputPassword } = req.body;
    console.log(inputEmail1, inputPassword1);
    return res.redirect('/');
});

app.get('/register', (req, res) => {
    return res.render('registerpage');
});

app.post('/register', (req, res) => {
    const { RegisterEmail, RegisterPassword, birthDate, name } = req.body;
    console.log(RegisterEmail1, RegisterPassword1, birthDate1, name1);
    return res.redirect('/'); 
});

app.get('*', (req, res) => {
    return res.render('404');
});

// Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});