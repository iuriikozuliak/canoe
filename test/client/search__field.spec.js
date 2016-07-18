import SearchField from '../../client/components/search__field';

const QUERY = {
  from: 'MEB',
  date: '2015-05-05'
};

describe('Search Field', function() {
  it('it renders correct markup', function() {
    expect(SearchField(QUERY)('from')).to.be.eql(`
  <div class=undefined >
    <input
      type      = text
      name      = from
      class     = undefined
      data-code = MEB
      required  = "required"
      value=MEB  />
    <div class=undefined></div>
  </div>`);
  });

  it('it renders type date for date field', function() {
    expect(SearchField(QUERY)('date')).to.be.eql(`
  <div class=undefined >
    <input
      type      = date
      name      = date
      class     = undefined
      data-code = 2015-05-05
      required  = "required"
      value=2015-05-05  />
    <div class=undefined></div>
  </div>`);
  });

  it('it doesn\'t render value if it\'s missing', function() {
    expect(SearchField(QUERY)('to')).to.be.eql(`
  <div class=undefined >
    <input
      type      = text
      name      = to
      class     = undefined
      data-code = undefined
      required  = "required"
      undefined  />
    <div class=undefined></div>
  </div>`);
  });
});