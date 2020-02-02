const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    const students = [
        {id: 1, name: 'John', username: 'Doe', sum: 100},
        {id: 2, name: 'Steve', username: 'Smith', sum: 200},
        {id: 3, name: 'Mary', username: 'Swanson', sum: 300}
    ];

    res.json(students);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));