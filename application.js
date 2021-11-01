const {Client} = require("pg")
const client = new Client({
    "host": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "***********",
    "database": "Library"
})

client.connect();
const dbQuery = "select ib.issuedate, ib.returndate, s.studentname from issuedbook ib join student s on ib.studentid = s.studentid";
client.query(dbQuery, (err, res) => {
    if (err) throw err;
    else getMaliciousReader(res.rows);
    client.end;
    }
);

function getMaliciousReader(issuedBooks) {
    let maliciousReaders = [];
    issuedBooks.map(issued => {
        if (issued['returndate'] == null) issued['returndate'] = new Date();
        let timeDiff = Math.abs(issued['returndate'].getTime() - issued['issuedate'].getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (diffDays >= 60 & !(maliciousReaders.includes(issued['studentname']))) maliciousReaders.push(issued['studentname']);
    });
    maliciousReaders.map(reader => console.log(reader));
  }

