import template from './utils/template';
import request  from 'superagent';
import Results  from './components/results';

class App {
  constructor() {
    this.$el = document.getElementById('app');
    this.getData();
  }
  async getData() {
    const res = await request.get('/search?date=2016-09-02&from=SYD&to=JFK');

    this.render({ flights: res.body })
  }
  render(props) {
    this.$el.innerHTML = Results(props);
  };
}

window.addEventListener('load', () => new App());