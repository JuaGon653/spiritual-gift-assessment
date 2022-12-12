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
        const resultsArray = results.split(',');

        const auth = new google.auth.GoogleAuth({
            keyFile: "google-credentials.json",
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
                    [firstname, lastname, resultsArray[0], resultsArray[1], resultsArray[2], resultsArray[3], resultsArray[4], resultsArray[5], resultsArray[6], resultsArray[7], resultsArray[8], resultsArray[9], resultsArray[10], resultsArray[11], resultsArray[12], resultsArray[13], resultsArray[14], resultsArray[15]]
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