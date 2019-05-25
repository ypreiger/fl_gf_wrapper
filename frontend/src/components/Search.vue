<template>
  <v-container>
    <v-layout>
      <v-radio-group :column="false" v-model="tripType">
        <v-radio
          v-for="(item,i) in tripTypes"
          :key="item"
          :label="`${item}`"
          :disabled="i==2 || i==1"
          :value="`${i}`"
        ></v-radio>
      </v-radio-group>
    </v-layout>
    <v-layout>
      <v-flex xs12 md4>
        <airport-selector
          :items="airportsList"
          :selected="from"
          :onChange="onSelectFrom"
          label="From"
        />
      </v-flex>
      <v-flex xs12 md1 :align-self-center="true">
        <v-icon>mdi-chevron-right</v-icon>
      </v-flex>
      <v-flex xs12 md4>
        <airport-selector :items="airportsList" :selected="to" :onChange="onSelectTo" label="To"/>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <date-selector label="Depart"/>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <date-selector label="Return"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AirportSelector from "./AitportSelector";
import getAirports from "../api/getAirports";
import DateSelector from "./DateSelector";

export default {
  data() {
    return {
      isEditing: true,
      model: null,
      from: null,
      to: null,
      tripType: 1,
      tripTypes: ["Roundtrip", "One way", "Multi-city"]
    };
  },
  mounted() {
    getAirports().then(result => {
      this.$store.commit("setAirportsList", result.data);
    });
  },
  computed: {
    airportsList() {
      return this.$store.state.airportsList;
    }
  },
  components: { AirportSelector, DateSelector },
  methods: {
    onSelectFrom(value) {
      this.from = value;
      console.log(this.from);
    },
    onSelectTo(value) {
      this.to = value;
      console.log(this.to);
    }
  }
};
</script>
