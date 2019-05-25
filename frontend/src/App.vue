<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>CHEAPEST FLIGHTS FINDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat target="_blank">
        <span class="mr-2">v0.1</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Search/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    HelloWorld,
    Search
  },
  data() {
    return {
      //
    };
  }
};
</script>
