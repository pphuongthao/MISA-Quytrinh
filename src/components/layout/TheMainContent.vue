<template>
  <div class="content flex-column" id="contentmain">
    <div class="content-view flex flex-column">
      <div class="flex flex-content">
        <TheMenu />
        <TheContentRight />
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from "./TheMenu.vue";
import TheContentRight from "./TheContentRight.vue";
export default {
  name: "TheContent",
  components: {
    TheMenu,
    TheContentRight,
  },
};
</script>
<style>
@import url(../../css/layout/content.css);
</style>
