import { agent }    from 'supertest';
import http         from 'http';
import createServer from '../../server/lib/createServer';
import memoize      from 'lodash/memoize';

export default memoize(async () =>
  agent(
    http.createServer(
      (await createServer()).callback()
    )
  )
);