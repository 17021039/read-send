const path = require("path");
const fs = require('fs');
const { gunzipSync } = require("zlib");

module.exports.main = (rep,res,next) => { 
    res.render('read');
}

module.exports.read = async (req,res,next) => {
    try {
        let content = fs.readFileSync(req.body.path,{encoding: 'utf-8'});
        res.send(content);
    } catch (error) {
        next(error);
    }
}

module.exports.content = async (req,res,next) => {
    let content = res.body.content;
    res.send(content);
}

module.exports.sendFile = (req,res,next) => {
    try {
        var options = {
            root: path.join('./'),
            dotfiles: 'deny',
            headers: {
              'x-timestamp': Date.now(),
              'x-sent': true
            }
          }
        
          var fileName = './image/111.jpg';
          res.sendFile(fileName, options, function (err) {
            if (err) {
              next(err)
            } else {
              console.log('Sent:', fileName)
            }
          })
    } catch (error) {
        next(error);
    }
}

var i = 0;
module.exports.saveFile = (req,res,next) => {
    try {
        console.log("req " +(i++) + ":");
        console.log(req.body);
        fs.writeFileSync('./image/233.jpg',JSON.stringify(req.body));
        res.send(true);

    } catch (error) {
        next(error);
    }
}