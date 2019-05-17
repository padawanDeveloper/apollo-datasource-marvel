import { RESTDataSource } from "apollo-datasource-rest";

class MarvelAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = Meteor.settings.public.marvel.api.BASE_URL;
  }

  async getSeries() {
    const result = await this.get("series");
    console.log('marvel this.baseURL', this.baseURL)
    return result;
  }

}

export default MarvelAPI;
