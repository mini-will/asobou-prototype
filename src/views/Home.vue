<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" filled label="なんにんであそぶ"></v-select>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="12" sm="6">
        <v-select
          v-model="playInfo.place"
          :items="playPlaces"
          filled
          chips
          label="どこであそぶ"
          multiple
        ></v-select>
      </v-col>
    </v-row>

    <div class="col-md-8">
      <div class="card">
        <v-btn color="accent">
          <router-link to="/playindex">PlayIndex</router-link>
        </v-btn>
      </div>

      <v-row>
        <v-col>
          <v-btn @click="increment">CountUp</v-btn>
          <h3>Count: {{ count }}</h3>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valuePlayPlace: 0,
    // items: ["Foo", "Bar", "Fizz", "Buzz"],
    // playPlaces: ["そとであそぶ", "なかであそぶ"],
  }),
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    increment: function() {
      this.$store.dispatch("incrementOne");
    },
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    },
    items: function() {
      return this.$store.state.items;
    },
    playPlaces: function() {
      return this.$store.state.playPlaces;
    },
    playInfo: {
      get() {
        return this.$store.state.playInfo;
      },
      set(value) {
        this.$store.commit("updateplayInfo", value);
      },
    },
  },
};
</script>
