<template>
  <div class="container">
    <section id="album-container">
      <div class="card" v-for="(album, index) in albumList" :key="index">
        <Cards :album="album" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Cards from "./Cards.vue";
export default {
  data() {
    return {
      albumList: [],
    };
  },
  name: "albums",
  components: {
    Cards,
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((r) => {
        this.albumList = r.data.response;
        console.log(this.albumList);
      });
  },
};
</script>

<style scoped lang="scss">
#album-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  background-color: #2e3a46;
  padding: 20px;
  margin: 20px;
  flex-basis: 200px;
  text-align: center;
  min-height: 350px;
}
</style>