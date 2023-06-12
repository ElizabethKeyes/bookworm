import { NytList } from "../models/NytList.js";
import { logger } from "../utils/Logger.js";
import { nytApi } from "./AxiosService.js";

class NytListsService {
  async getNytLists() {
    const res = await nytApi.get('lists/full-overview.json')
    logger.log(res, 'response')
    const lists = res.data.results.lists.map(l => new NytList(l))
    logger.log(lists, 'lists')
  }
}

export const nytListsService = new NytListsService();