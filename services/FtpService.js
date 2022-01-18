var Client = require('ftp');
require('dotenv').config();


let ftpConnection = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_LOGIN,
    password: process.env.FTP_PASS,
    port: 21
};

exports.getFiles = () => {
    var c = new Client();
    c.on('ready', function () {
        c.list(function (err, list) {
            if (err) throw err;
            console.dir(list);
            c.end();
        });
    });
    c.connect(ftpConnection);
}

exports.addFile = (file) => {
    var c = new Client();
    c.on('ready', function () {
        c.put(file, 'barbotin48@gmail.com', function (err) {
            if (err) throw err;
            c.end();
        });
    });
    c.connect(ftpConnection);
}

