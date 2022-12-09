const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');

const { google } = require('googleapis');

const app = express();

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/quiz', async (req, res) => {
    try {
        const { firstname, lastname, results } = req.body;

        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        });

        const client = await auth.getClient();

        const googleSheets = google.sheets({
            version: "v4",
            auth: client
        });

        const spreadsheetId = "1ZYyY1M0dP12bcL05RLwRTNxNC5OAs0rJBbZtHq7jHnI";

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Sheet1!A:C",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [firstname, lastname, results]
                ]
            }
        });

        res.status(200).redirect('/');
    } catch (error) {
        res.status(500).json({ message: 'Error in posting results' });
    }
    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});