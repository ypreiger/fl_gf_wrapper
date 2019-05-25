<template>
  <v-autocomplete
    item-text="name"
    item-value="id"
    :label="label"
    :value="selected"
    :items="items"
    @change="selectorChange"
  ></v-autocomplete>
</template>

<script>
export default {
  props: {
    items: { type: Array },
    onChange: { type: Function },
    selected: { type: Number },
    label: { type: String }
  },
  methods: {
    selectorChange(val) {
      this.onChange(val);
    }
  }
};
</script>
