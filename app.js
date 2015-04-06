
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');


var app = module.exports = express.createServer();
var ejs = require('ejs');
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  
 /*app.set('view engine', 'ejs');
 app.register(".html", {

        compile: function(str, options){

            return function(locals){

                return str;

            };

        }

    }); // 指向html模板*/
app.register('html', ejs); //同时支持html的设置
app.set('view engine', 'ejs');//同时支持ejs
  app.set("view options", {layout: false}); // 指定index不指定layout模板.
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);


app.post('/dosearch',routes.dosearch);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
