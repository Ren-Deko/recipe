const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
 host: 'ID324796_s24cc.db.webhosting.be',
 user: 'ID324796_s24cc',
 password: 'D9025A6A54Sc4E07p117',
 database: 'ID324796_s24cc'
});

db.connect((err) => {
 if (err) throw err;
 console.log('Connected to database');
});

app.post('/recipe', (req, res) => {
 const { recipeName, recipeDescription, recipeDifficulty } = req.body;
 const query = 'INSERT INTO recipes (name, description, difficulty) VALUES (?, ?, ?)';
 const values = [recipeName, recipeDescription, recipeDifficulty];

 db.query(query, values, (err, result) => {
   if (err) {
     console.error('Error during recipe insertion:', err);
     return res.status(500).json({ success: false, message: 'An error occurred during recipe insertion' });
   }
   res.status(200).json({ success: true, message: 'Recipe inserted successfully' });
 });
});


app.get('/', (req, res) => {
    res.send('Hello World!');
   });
   

   app.listen(8000, '0.0.0.0', () => {
    console.log('Server running on port 8000');
   });
   
