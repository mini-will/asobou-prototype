<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>play info</h1>

          <!-- <p>{{ this.getPlayCardsById(Number($route.params.id)) }}</p> -->

          <p>{{ $route.params.id }}</p>
          <p>{{ temp[0].kanji_name }}</p>
          <p>{{ temp[0].display_name }}</p>
          <p>{{ temp[0].description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      temp: []
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