<template>
  <div class="container-fluid">
    <section class="row">

    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { nytListsService } from "../services/NytListsService.js"

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
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
