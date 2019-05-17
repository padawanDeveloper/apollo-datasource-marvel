import { RESTDataSource } from 'apollo-datasource-rest'

class MarvelAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = Meteor.settings.public.marvel.api.BASE_URL
  }

  async getSeries() {
    console.log('aca construye el fetch a la api')
    return [{ title: 'Fake Serie 1' }, { title: 'Fake Serie 2' }]
  }
}

export default MarvelAPI
