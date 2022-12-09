const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});