const express = require('express.io');
const app = express();
const bodyParser = require('body-parser');
const io = require('socket.io')();

const environment = process.env.NODE_ENV || 'development';
const envPath     = __dirname+'/environments/'+environment+'/';
const routes      = require(__dirname+'/express/routing').routes;
const staticDirs  = require(__dirname+'/express/routing').staticDirs;
const err404      = require(__dirname+'/express/routing').err404;

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.http().io();

routes.forEach(function (route){
  app.get(route.path,function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.sendfile(envPath+'views/index.html');
  });
});

staticDirs.forEach(function (dir){
  app.use('/'+dir, express.static(envPath+dir));
});

app.get('/env', function(req, res) {
	res.status(200).send(process.env);
});

app.use(err404);

app.io.route('ready', function(req) {
  req.io.emit('talk', {
      message: 'io event from an io route on the server'
  });
});

app.listen(app.get('port'), function() {
  console.log('Vue boilerplate is running on port', app.get('port'));
});
