import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});