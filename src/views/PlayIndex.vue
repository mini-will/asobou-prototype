<template>
  <v-app>
    <v-container>
      <br />
      <h2>あそびをえらんでね</h2>

      <v-row>
        <v-col cols="12" sm="6" class="d-flex justify-center"></v-col>
      </v-row>

      <h3>おうちであそぶ</h3>
      <div v-if="!loading">
        <v-row>
          <v-col
            v-for="(playcard,index) in temp3"
            :key="playcard.id"
            cols="6"
            sm="3"
            class="d-flex justify-center"
          >
            <v-card>
              <v-responsive :aspect-ratio="16 / 9">
                <router-link :to="{ name: 'PlayInfo', params: { id:playcard.id } }">
                  <v-img
                    :src="playcard.image_url"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
                  </v-img>
                </router-link>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn @click="setPlaydata3(index)">ほかの</v-btn>
                </v-card-actions>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div v-else>Loading...</div>

      <h3>そとであそぶ</h3>
      <v-row>
        <v-col
          v-for="(playcard,index) in temp4"
          :key="playcard.id"
          cols="6"
          sm="3"
          class="d-flex justify-center"
        >
          <v-card>
            <v-responsive :aspect-ratio="16 / 9">
              <router-link :to="{ name: 'PlayInfo', params: { id:playcard.id } }">
                <v-img
                  :src="playcard.image_url"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
                </v-img>
              </router-link>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn @click="setPlaydata4(index)">ほかの</v-btn>
              </v-card-actions>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>

      <!-- <p>{{ getPlayCardsByInOut("in") }}</p> -->
      <!-- <p>{{ this.temp.image_url }}</p> -->
      <!-- <p>{{ getRandom(getPlayCardsByInOut("in")).image_url }}</p>
      <p>{{ getRandom(getPlayCardsByInOut("in")) }}</p>
      <p>{{ getRandom(getPlayCardsByInOut("out")) }}</p>-->
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      // temp1: [],
      temp2: [],
      temp3: [],
      temp4: []
    };
  },
  created: function() {
    // this.temp1 = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp2 = this.getRandom(this.getPlayCardsByInOut("out"));

    this.temp3[0] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[1] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[2] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[3] = this.getRandom(this.getPlayCardsByInOut("in"));

    this.temp4[0] = this.getRandom(this.getPlayCardsByInOut("out"));
    this.temp4[1] = this.getRandom(this.getPlayCardsByInOut("out"));
    // this.temp4[2] = this.getRandom(this.getPlayCardsByInOut("out"));
    // this.temp4[3] = this.getRandom(this.getPlayCardsByInOut("out"));

    this.loading = false;
  },
  computed: {
    ...mapState(["playCards"]),
    ...mapGetters([
      "getPlayCardsByInOut" // => `this.isPositive` が `this.$store.getters.isPositive` にマッピングされる
    ])
  },
  methods: {
    getRandom(ary) {
      return ary[Math.floor(Math.random() * ary.length)];
    },
    setPlaydata3(index) {
      this.temp3.splice(
        index,
        1,
        this.getRandom(this.getPlayCardsByInOut("in"))
      );
    },
    setPlaydata4(index) {
      this.temp4.splice(
        index,
        1,
        this.getRandom(this.getPlayCardsByInOut("out"))
      );
    }
  }
};
</script>
