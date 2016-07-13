export default () => ({
  get: async function get() {
    const data = await (() => 
      new Promise((resolve, reject) => setTimeout(() => resolve(['Ryanair']), 200))
    )();
    return data;
  }
})