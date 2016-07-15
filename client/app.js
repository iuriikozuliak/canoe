import template from './utils/template';
import getQuery from './utils/getQuery';
import request  from 'superagent';
import Results  from './components/results';

class App {
  constructor() {
    this.req = {}
  }
  async getData({ query }) {
    // kill the previous request if still pending
    if (this.req.xhr.status === 0) { 
      this.req.abort();
    }

    this.req = request
      .get('/search')
      .query(query);

    const data = await this.req;

    return data.body;
  }
  async updateView({ location }) {
    const query   = getQuery({ location });
    const flights = await this.getData({ query });

    this.render({ flights })
  }
  async onLoad() {
    this.$el = document.getElementById('app');

    await this.updateView(window);
  }
  render(props) {
    this.$el.innerHTML = Results(props);
  };
}

const app = new App();

window.addEventListener('load',       async () => await app.onLoad());
window.addEventListener('hashchange', async ({ target }) => await app.updateView(target));