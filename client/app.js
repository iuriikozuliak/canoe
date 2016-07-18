import moment   from 'moment';
import template from './utils/template';
import getQuery from './utils/getQuery';
import Results  from './components/results';
import Search   from './components/search';
import {
  canoe__app,
  canoe__app__title
} from "./styles/app.scss";

class App {
  constructor() {
    this.components = [Search, Results].map(Component => new Component(this));
  }
  onLoad() {
    const query = getQuery({ location });

    this.$el = document.getElementById('app');

    const dateRange = ((startDate) => [...Array(7)].map(v => 
      moment(startDate.add(1, 'days')).format('YYYY-MM-DD')
    ))(moment(query.date).utc().subtract(3, 'days'));

    this.render({ query, dateRange, activeTab: query.date });
  }
  render(props) {
    this.$el.innerHTML = `
      <div class=${ canoe__app }>
        <h2 class=${ canoe__app__title }>Flights:</h2>
        ${this.components.reduce((total, Component) => total + `<div>${Component.render(props)}</div>`, '')}
      </div>
    `;

    this.components.forEach(Component => Component.init(props));
  };
}

const app = new App();

window.addEventListener('load', async () => await app.onLoad());
window.addEventListener('hashchange', ({ target }) => app.onLoad());