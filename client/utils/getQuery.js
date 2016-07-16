export default ({ location }) => {
  if (location.hash === '') return {};

  return location.hash.slice(1).split('&').reduce((total, curr) => {
    const kv = curr.split('=');
    return Object.defineProperty(total, kv[0], { value: kv[1], enumerable: true });
  }, {}); 
}
