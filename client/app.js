import request  from 'superagent';
import template from './utils/template';
import getQuery from './utils/getQuery';
import Results  from './components/results';
import Search   from './components/search';
import styles   from "./styles/app.css";

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
    const query    = getQuery({ location });
    const hasQuery = Object.keys(query).length !== 0;
    
    if (hasQuery) {
      this
      .getData({ query })
      .then(flights => this.render({ flights, query, isLoading: false }));  
    }
    
    this.render({ query, isLoading: hasQuery });
  }
  async onLoad() {
    this.$el = document.getElementById('app');

    this.updateView(window);
  }
  render(props) {
    this.$el.innerHTML = `
      <div class=${styles.canoe__app}>
        ${this.components.reduce((total, component) => (
          total + (typeof component.render === 'function' ? component.render(props) : component(props))
        ), '')}
      </div>
    `;

    this.components.forEach(component => (
      typeof component.render === 'function' && new component()
    ));
  };
}

const app = new App();

window.addEventListener('load', async () => await app.onLoad());
window.addEventListener('hashchange', ({ target }) => app.updateView(target));