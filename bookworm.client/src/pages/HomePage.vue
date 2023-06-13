<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-10">
        <h1>Bestsellers - Hardcover Fiction</h1>
        <div v-for="b in hardcoverFictionList[0].books" :key="b.title" class="hardcoverFictionList">
          <img :src="b.bookImage" :alt="'a photo of ' + b.title">
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

<style scoped lang="scss"></style>
