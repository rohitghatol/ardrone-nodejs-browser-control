/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 6/29/13
 * Time: 3:10 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express')
    , app = express()
    , server = require("http").createServer(app)

app.use(express.static(__dirname + '/public'));


require("./drone/camera-feed");
require("./drone/controller");

app.listen(3000);


