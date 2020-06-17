const app = require('./config/server');

require('./app/routes/news')(app);

// Starting Server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

