import request     from 'superagent';
import _flow       from 'lodash/fp/flow';
import _sortBy     from 'lodash/fp/sortBy';
import _map        from 'lodash/fp/map';
import _isEqual    from 'lodash/isEqual';
import template    from '../utils/template';
import ResultsItem from './results__item';
import attachEvent from '../utils/attachEvent'
import { 
  canoe__results,
  canoe__results__tabs,
  canoe__results__tab,
  canoe__results__tab__price,
  isTabActive
} from '../styles/results.scss';

export default class Results {
  constructor() {
    this.reqs = [];
  }
  init(props) {
    this.$el = document.getElementById('results').parentNode;

    this.props = {...props, flights: {} };
    this.fetch();
  }
  initEvents() {
    this.$tabs = this.$el.querySelectorAll(`.${canoe__results__tab}`);
    
    Array.prototype.forEach.call(
      this.$tabs, 
      attachEvent(
        'click',
        this.onTabClick(this.updateComponent.bind(this))
      )
    );
  }
  onTabClick(updateComponent) {
    return (e) => updateComponent({
      activeTab: e.currentTarget.dataset.date
    })
  }
  fetch() {
    const { 
      query, dateRange 
    } = this.props;

    if (Object.keys(query).length === 0) return;

    this.reqs.forEach(req => req.abort());

    dateRange.forEach(date =>
      this
        .getFlights({ query: { ...query, date} })
        .then(flights => {
          this.props.flights[date] = flights;

          this.updateComponent();
      }) 
    )
    this.updateComponent()
  }
  updateComponent(props = {}) {
    this.$el.innerHTML = this.render({ 
      ...Object.assign(this.props, props) 
    });
    this.initEvents()
  }
  async getFlights({ query }) {
    const req = request
      .get('/search')
      .query(query);

    this.reqs.push(req);
    const data = await req;

    return data.body;
  }
  render(props) {
    const { flights = {}, dateRange = [], activeTab } = props;
    
    return template`
      <div id="results" class=${ canoe__results }>
        <div class=${ canoe__results__tabs }>
          ${ dateRange.map(date => 
            template`
            <div 
              data-date=${ date }
              class="${ canoe__results__tab + (date === activeTab && flights[date] ? ' ' + isTabActive : '')}">
              ${ date }
              ${ flights[date] ? '' : 'Loading...' }
              <div class=${ canoe__results__tab__price }>
                ${ flights[date] ? _sortBy(v => v.price)(flights[date])[0].price : '' }
              </div>
            </div>`
          )}
        </div>
        ${ flights[activeTab]
            ? _flow(
                _sortBy(v => v.price),
                _map(ResultsItem)
            )(flights[activeTab])
            : 'Loading...' }
      </div>`;
  }
}