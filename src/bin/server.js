import './_bootstrap';
import createServer from 'lib/createServer';

const PORT = process.env.PORT || 3000;

createServer().then(app => {
  app.listen(PORT, () => {
    const mode = env.NODE_ENV;
    console.log('Server is ready on', PORT);
  });
}, err => {
  console.log(err);
});