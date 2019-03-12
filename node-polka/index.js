const polka = require('polka');
const serveStatic = require('serve-static');

/*
 *
 */

const app = polka();

// Always run, as expected
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Never run, but should be
app.use('/admin', (req, res, next) => {
  console.log('  @admin!');
  next();
});

// Always run, as expected
app.use(serveStatic(__dirname + '/_static'));

/*
 *
 */

app.listen(4444, () => console.log('Listening on port 4444...'));
