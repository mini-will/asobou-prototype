<template>
  <v-app>
    <v-container>
      <br />
      <h2>あそびをえらんでね</h2>

      <v-row>
        <v-col cols="12" sm="6" class="d-flex justify-center"></v-col>
      </v-row>

      <h3>おうちであそぶ</h3>
      <v-row>
        <v-col>
          <v-card>
            <v-img
              :src="this.temp1.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="this.temp1.display_name" class="headline font-weight-bold"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
                <v-icon @click="setPlaydata1">mdi-cloud-upload</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <h3>そとであそぶ</h3>
      <v-row>
        <v-col>
          <v-card>
            <v-img
              :src="this.temp2.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="this.temp2.display_name" class="headline font-weight-bold"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
                <v-icon @click="setPlaydata2">mdi-cloud-upload</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- <p>{{ getPlayCardsByInOut("in") }}</p> -->
      <!-- <p>{{ this.temp.image_url }}</p> -->
      <!-- <p>{{ getRandom(getPlayCardsByInOut("in")).image_url }}</p>
      <p>{{ getRandom(getPlayCardsByInOut("in")) }}</p>
      <p>{{ getRandom(getPlayCardsByInOut("out")) }}</p>-->

      <div v-if="!loading">
        <!-- <v-row>
          <v-col
            v-for="playcard in playCards"
            :key="playcard.id"
            cols="12"
            sm="6"
            class="d-flex justify-center"
          >
            <v-card>
              <v-responsive :aspect-ratio="16 / 9">
                <v-img
                  :src="playcard.image_url"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
                </v-img>

                <v-card-text>
                  <div class="text--primary">sample text .......</div>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>-->
      </div>

      <div v-else>Loading...</div>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      temp1: [],
      temp2: []
    };
  },
  created: function() {
    this.temp1 = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp2 = this.getRandom(this.getPlayCardsByInOut("out"));
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
    setPlaydata1() {
      this.temp1 = this.getRandom(this.getPlayCardsByInOut("in"));
    },
    setPlaydata2() {
      this.temp2 = this.getRandom(this.getPlayCardsByInOut("out"));
    }
  }
};
</script>
