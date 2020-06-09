<template>
  <v-app>
    <v-container>
      <br />
      <h2>あそびをえらんでね</h2>

      <v-row>
        <v-col cols="12" sm="6" class="d-flex justify-center"></v-col>
      </v-row>

      <h3>おうちであそぶ</h3>

      <v-card class="mb-4">
        <v-responsive :aspect-ratio="16 / 9">
          <router-link :to="{ name: 'PlayInfo', params: { id:temp3[0].id } }">
            <v-img
              :src="temp3[0].image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="temp3[0].display_name" class="headline font-weight-bold"></v-card-title>
            </v-img>
          </router-link>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-on:click="color_switch(temp3[0].id)">
              <v-icon v-if="isActiveIn === false">mdi-heart</v-icon>
              <v-icon v-else color="pink">mdi-heart</v-icon>
            </v-btn>
            <v-btn @click.stop="dialogIn = true">ほかの</v-btn>
          </v-card-actions>
        </v-responsive>
      </v-card>

      <!-- ■ダイアログ -->
      <v-dialog v-model="dialogIn" light overlay-opacity="0.7">
        <div style="background-color: lightgray">
          <v-row>
            <v-col
              v-for="(playcard,index) in temp3"
              :key="index + playcard.id"
              cols="6"
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
                    @click="switchMainPlayIn(playcard.id)"
                  >
                    <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
                  </v-img>
                </v-responsive>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" class="d-flex justify-center">
              <v-btn @click="setPlaydata3(index)" justify="center">ほかの</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-dialog>

      <h3>そとであそぶ</h3>
      <v-card class="mb-4">
        <v-responsive :aspect-ratio="16 / 9">
          <router-link :to="{ name: 'PlayInfo', params: { id:temp4[0].id } }">
            <v-img
              :src="temp4[0].image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="temp4[0].display_name" class="headline font-weight-bold"></v-card-title>
            </v-img>
          </router-link>

          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn icon v-on:click="color_switch(index)">
              <v-icon v-if="isActive[index] === false">mdi-heart</v-icon>
              <v-icon v-else color="pink">mdi-heart</v-icon>
            </v-btn>-->
            <v-btn @click.stop="dialogOut = true">ほかの</v-btn>
          </v-card-actions>
        </v-responsive>
      </v-card>

      <!-- ■ダイアログ -->
      <v-dialog v-model="dialogOut" overlay-opacity="0.7">
        <div style="background-color: lightgray">
          <v-row>
            <v-col
              v-for="(playcard,index) in temp4"
              :key="index + playcard.id"
              cols="6"
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
                    @click="switchMainPlayOut(playcard.id)"
                  >
                    <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
                  </v-img>
                </v-responsive>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" class="d-flex justify-center">
              <v-btn @click="setPlaydata4" justify="center">ほかの</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-dialog>

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
      // temp2: [],
      temp3: [],
      temp4: [],
      isActiveIn: false,
      dialogIn: false,
      dialogOut: false,
      playLiked: []
    };
  },
  created: function() {
    // this.temp1 = this.getRandom(this.getPlayCardsByInOut("in"));
    // this.temp2 = this.getRandom(this.getPlayCardsByInOut("out"));

    this.temp3[0] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[1] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[2] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.temp3[3] = this.getRandom(this.getPlayCardsByInOut("in"));
    this.isActiveIn = false;

    this.temp4[0] = this.getRandom(this.getPlayCardsByInOut("out"));
    this.temp4[1] = this.getRandom(this.getPlayCardsByInOut("out"));
    this.temp4[2] = this.getRandom(this.getPlayCardsByInOut("out"));
    this.temp4[3] = this.getRandom(this.getPlayCardsByInOut("out"));

    this.loading = false;
  },
  computed: {
    ...mapState(["playCards"]),
    ...mapGetters([
      "getPlayCardsByInOut", // => `this.isPositive` が `this.$store.getters.isPositive` にマッピングされる
      "getPlayCardsById"
    ])
  },
  methods: {
    getRandom(ary) {
      return ary[Math.floor(Math.random() * ary.length)];
    },
    setPlaydata3() {
      this.temp3.splice(0, 1, this.getRandom(this.getPlayCardsByInOut("in")));
      this.temp3.splice(1, 1, this.getRandom(this.getPlayCardsByInOut("in")));
      this.temp3.splice(2, 1, this.getRandom(this.getPlayCardsByInOut("in")));
      this.temp3.splice(3, 1, this.getRandom(this.getPlayCardsByInOut("in")));
    },
    setPlaydata4() {
      this.temp4.splice(0, 1, this.getRandom(this.getPlayCardsByInOut("out")));
      this.temp4.splice(1, 1, this.getRandom(this.getPlayCardsByInOut("out")));
      this.temp4.splice(2, 1, this.getRandom(this.getPlayCardsByInOut("out")));
      this.temp4.splice(3, 1, this.getRandom(this.getPlayCardsByInOut("out")));
    },
    color_switch(playId) {
      this.isActiveIn = !this.isActiveIn;
      this.playLiked.splice(0, 1, {
        id: 1,
        user: "testUser",
        playId: playId,
        liked: this.isActiveIn,
        display: "show"
      });
    },
    switchMainPlayIn(playId) {
      this.temp3.splice(0, 1, this.getRandom(this.getPlayCardsById(playId)));
      this.dialogIn = false;
    },
    switchMainPlayOut(playId) {
      this.temp4.splice(0, 1, this.getRandom(this.getPlayCardsById(playId)));
      this.dialogOut = false;
    }
  }
};
</script>
