const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const UserRoute = require('./routes/user');
const StudentRequestRoute = require('./routes/studentRequest');
const ClearanceRoute = require('./routes/clearance');
const TransferRoute = require('./routes/transfer');
const DefermentRoute = require('./routes/deferment');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Database connected successfully');
});

app.use('/user', UserRoute);
app.use('/studentRequest', StudentRequestRoute);
app.use('/clearance', ClearanceRoute);
app.use('/transfer', TransferRoute);
app.use('/deferment', DefermentRoute);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
