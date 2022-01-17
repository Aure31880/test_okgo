var Client = require('ftp');
require('dotenv').config();


let ftpConnection = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_LOGIN,
    password: process.env.FTP_PASS,
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

