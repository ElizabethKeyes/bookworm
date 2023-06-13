import { AppState } from "../AppState.js";
import { NytList } from "../models/NytList.js";
import { logger } from "../utils/Logger.js";
import { nytApi } from "./AxiosService.js";

class NytListsService {
  async getNytLists() {
    const res = await nytApi.get('lists/full-overview.json')
    logger.log(res, 'res')
    AppState.NytLists = res.data.results.lists.map(l => new NytList(l))
    logger.log(AppState.NytLists, 'appstate lists')
  }
}

export const nytListsService = new NytListsService();