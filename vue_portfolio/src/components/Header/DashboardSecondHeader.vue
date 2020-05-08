<template>
  <section class="d-flex justify-center">
      <v-toolbar height="70px" color="#41A3F0">
        <v-spacer></v-spacer>
        <p class="logo my-0 mx-5">CCB</p>
        <form>
          <input type="text" class="serach-box">
          <v-btn class="ml-3 default-text-color">レシピ検索</v-btn>
        </form>
        <v-spacer></v-spacer>
        <v-btn class="ml-3 default-text-color" color="#D9C930">
          レシピを書く
          <v-icon>{{ svgPath }}</v-icon>
        </v-btn>
        <v-avatar size="36px" color="white" class="ml-4">
          <v-icon>{{ svgPath2 }}</v-icon>
        </v-avatar>
        <v-spacer></v-spacer>
      </v-toolbar>
  </section>
</template>

<script>
  import { mdiBrush } from '@mdi/js'
  import { mdiAccountCircle } from '@mdi/js'

  export default {
    data: () => ({
      svgPath: mdiBrush,
      svgPath2: mdiAccountCircle
    }),
  }
</script>
<style scopped>
  .serach-box{
    background-color: #f7f3f3;
    border-radius: 3px;
    height: 38px;
    width: 450px;;
  }
  .logo{
    font-size: 35px;
    font-family: cursive;
    color: #ebef02;
  }
  .default-text-color{
    color:#5f5c5c !important;
  }
</style>