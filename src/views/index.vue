<template>
  <div>
    <v-container>
      <v-subheader>Demo</v-subheader>

      <v-btn color="primary" @click="$router.push('/vuetify/message')">
        <v-icon left>mdi-label</v-icon>
        vuetify-message-snackbar
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>

<style scoped lang="less"></style>
