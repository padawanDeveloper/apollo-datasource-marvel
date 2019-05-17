export default {
  Query: {
    series: async (obj, args, { dataSources }) => {
      const result = await dataSources.MarvelAPI.getSeries()
      return result
    },
  },
}
