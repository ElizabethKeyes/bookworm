<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-10">
        <h1>Bestsellers - Hardcover Fiction</h1>
        <div class="hardcoverFictionList">
          <div v-for="b in hardcoverFictionList[0].books" :key="b.title" class="books">
            <img :src="b.bookImage" :alt="'a photo of ' + b.title">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { nytListsService } from "../services/NytListsService.js"
import { AppState } from "../AppState.js";

export default {
  setup() {
    async function getNytLists() {
      try {
        await nytListsService.getNytLists()
      } catch (error) {
        logger.log(error)
      }
    }

    onMounted(() => {
      getNytLists()
    })
    return {
      hardcoverFictionList: computed(() => AppState.NytLists.filter(l => l.listId == 1))
    }
  }
}
</script>

<style scoped lang="scss">
.hardcoverFictionList {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #35393ec2;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #c3c4c6;
  border-radius: 10px;
}

.books {
  float: left;
  padding: 10px;
  white-space: normal;
}
</style>
