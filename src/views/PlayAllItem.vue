<template>
  <div>
    <h1 class="display-1 font-weight-bold ma-4">ぜんぶのあそび</h1>

    <v-row>
      <v-col
        v-for="(playcard,index) in playCards"
        :key="index + playcard.id"
        cols="6"
        sm="3"
        class="d-flex justify-center"
      >
        <v-card>
          <router-link :to="{ name: 'PlayInfo', params: { id:playcard.id } }">
            <v-img
              :src="playcard.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              @click="switchMainPlayIn(playcard.id)"
            >
              <v-card-title v-text="playcard.display_name" class="headline font-weight-bold"></v-card-title>
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      playAllData: null
    };
  },
  created: function() {},
  computed: {
    ...mapState(["playCards"]),
    ...mapGetters(["getPlayCardsById"])
  }
};
</script>