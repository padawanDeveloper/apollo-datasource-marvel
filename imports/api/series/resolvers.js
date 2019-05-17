export default {
  Query: {
    series: async (obj, args, { dataSources }) => {
      console.log('series')
      const result = await dataSources.BudaAPI.getSeries();
      console.log('result', result)
      return result;
    }
  }
}