const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs');
const { parse } = require('path');
const app = express();
const port = 9000

//middleware
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id').
    get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const body = req.body;
        fs.readFile('./MOCK_DATA.json','utf-8',(err,data) => {
            if(err) {
                console.log(err);
            }
            const parsedData = JSON.parse(data);
            parsedData.first_name = body.first_name;
            parsedData.last_name = body.last_name;
            fs.writeFile('./MOCK_DATA.json',JSON.stringify(parsedData),(err) => {
                if(err)
                    console.log("Failed");
                console.log("Updated successfully!");
            })
        })
        console.log(body.id);
        return res.json({ status: "pending",id:body.id });
    })
    .delete((req, res) => {
        return res.json({ status: "pending" });
    })

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body,id:body.id});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users), (err,data) => {
    return res.json({ status: "pending", id:users.length});
    })
    console.log("body", body);
});
app.listen(port, () => console.log(`server started att port ${port}`))