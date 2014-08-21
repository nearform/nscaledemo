
var _               = require('underscore')
  , express         = require('express')
  , app             = express()
  , http            = require('http')
  , server          = http.createServer(app);

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/public');
  app.engine('html', require('ejs').renderFile);
})

var port = Number(process.env.PORT || 8000)
server.listen(port);

console.log('Listening on port ' + port);
