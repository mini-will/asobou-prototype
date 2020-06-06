<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <router-link :to="{ name: 'PlayIndex' }">あそび一覧へ戻る</router-link>

          <h1 class="my-4">{{ temp[0].display_name }}</h1>

          <!-- <p>{{ this.getPlayCardsById(Number($route.params.id)) }}</p> -->
          <!-- <p>{{ temp[0].kanji_name }}</p> -->
          <!-- <p>{{ $route.params.id }}</p> -->

          <youtube :video-id="temp[0].videoId" />

          <p>{{ temp[0].description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  data() {
    return {
      loading: false,
      temp: [],
      videoId: "zaoo8zWT8ek"
    };
  },
  created: function() {
    this.temp = this.getPlayCardsById(Number(this.$route.params.id));
  },
  mounted: function() {},
  computed: {
    ...mapState(["playCards"]),
    ...mapGetters([
      "getPlayCardsById" // => `this.isPositive` が `this.$store.getters.isPositive` にマッピングされる
    ])
  }
};
</script>

<style lang="css">
iframe {
  width: 100%;
  /* max-width: 400px; Also helpful. Optional. */
}
</style>
