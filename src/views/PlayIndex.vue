<template>
  <v-app>
    <v-container>
      <br />
      <h2>あそびをえらんでね</h2>
      <div v-if="!loading">
        <v-row>
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
                  <v-card-title
                    v-text="playcard.display_name"
                    class="headline font-weight-bold"
                  ></v-card-title>
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
        </v-row>
      </div>

      <div v-else>Loading...</div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    playCards: function() {
      return this.$store.state.playCards;
    },
  },
};
</script>
