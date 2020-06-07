<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">Asobou</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- TODO:autocomplete -->
      <!-- <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="What state are you from?"
        solo-inverted
      ></v-autocomplete>-->

      <router-link to="/playallitem">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>

      <v-btn color="accent" small>
        <router-link to="/playindex">PlayIndex</router-link>
      </v-btn>
    </v-app-bar>

    <br />
    <br />
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
