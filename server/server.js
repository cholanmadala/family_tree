const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Port on which the server will listen

// Define route to serve family.json
app.get('/family.json', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.sendFile(path.join(__dirname, 'public', 'family.json'));
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
