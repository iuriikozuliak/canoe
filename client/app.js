import template from './utils/template';
import getQuery from './utils/getQuery';
import request  from 'superagent';
import Results  from './components/results';
import Search   from './components/search';

class App {
  constructor() {
    this.components = [Search, Results];
  }
  async getData({ query }) {
    // kill the previous request if still pending
    if (this.req && this.req.xhr.status === 0) { 
      this.req.abort();
    }

    this.req = request
      .get('/search')
      .query(query);

    const data = await this.req;

    return data.body;
  }
  updateView({ location }) {
    const query = getQuery({ location });
    
    this
      .getData({ query })
      .then(flights => this.render({ flights, query }));

    this.render({ query })
  }
  async onLoad() {
    this.$el = document.getElementById('app');

    this.updateView(window);
  }
  render(props) {
    this.$el.innerHTML = this.components.reduce((total, component) => (
      total + (typeof component.render === 'function' ? component.render(props) : component(props))
    ), '')

    this.components.forEach(component => (
      typeof component.render === 'function' && new component()
    ));
  };
}

const app = new App();

window.addEventListener('load', async () => await app.onLoad());
window.addEventListener('hashchange', ({ target }) => app.updateView(target));