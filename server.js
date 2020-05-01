const express = require('express');
const connection = require('./server/config/connection');
const config = require('./server/config/default');
const userRouter = require('./server/routes/User.routes');
const historyRouter = require('./server/routes/History.routes');

const app = express();
app.get('/', function (req, res) {
	res.json({ tutorial: 'Build REST API with node.js' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/User', userRouter);
app.use('/History', historyRouter);

async function start() {
	try {
		await connection();
		app.listen(config.PORT, () =>
			console.log(`Server strated at PORT : ${config.PORT}`)
		);
	} catch (error) {
		console.log(`Server error : ${error}`);
		process.exit(1);
	}
}
start();
