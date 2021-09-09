<template>
  <div>
    <img :src="album.poster" :alt="album.title" />
    <h2 class="title">{{ album.title }}</h2>
    <address class="author">{{ album.author }}</address>
    <time :datetime="album.year" class="year">{{ album.year }}</time>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["album"],
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

img {
  width: 100%;
  height: auto;
}

.title {
  color: #fff;
  margin: 15px 0;
  font-size: 20px;
}

.author,
.year {
  color: $color-grey;
}

.author {
  font-size: 16px;
}
.year {
  font-size: 14px;
}
</style>