import _map from 'lodash/map';

export default (strings, ...values) =>
  _map(values, (value, index) =>
    strings[index] + (Array.isArray(value) ? value.join('') : value)
  )
  .join('') 
  + strings[strings.length - 1];