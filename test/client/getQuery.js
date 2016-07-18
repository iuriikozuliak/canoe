import getQuery from '../../client/utils/getQuery';

const QUERY = '#date=2016-09-04&from=SYD&to=JFK';

describe('getQuery util', function() {
  it('it returns object from query string', function() {
    expect(getQuery({ location: { hash: QUERY }})).to.be.eql({
      date: '2016-09-04',
      from: 'SYD',
      to: 'JFK'
    });
  });
});