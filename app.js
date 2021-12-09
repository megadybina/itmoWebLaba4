const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '\\views'));
app.use(express.static(__dirname + '/public'));

const port = 3000;


const accountRouter = require('./routes/account');
const blogRouter = require('./routes/blog');
const indexRouter = require('./routes/index');

app.use('/account/', accountRouter);
app.use('/blog/', blogRouter);
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}); 