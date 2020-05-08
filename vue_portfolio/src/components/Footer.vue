<template>
  <section>
    <v-footer class="footer-color" width="100%">
      <table cellspacing="0" cellpadding="5" class="pb-2">
        <tr>
          <th class="app-name">CCB(Central Coocking Blog):料理ブログ集客プラットフォーム</th>
        </tr>
      </table>

      <table  class="p-5 main-table" width="100%" cellspacing="0" cellpadding="5">
        <tr>
          <th>レシピを探す</th>
          <th>レシピを書く</th>
        </tr>
        <tr>
          <td><a>テキストテキスト</a></td>
          <td><a>テキストテキスト</a></td>
        </tr>
        <tr>
          <td><a>テキストテキスト</a></td>
          <td><a>テキストテキスト</a></td>
        </tr>
      </table>
    </v-footer>
  </section>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>
<style scopped>
  .app-name{
    color:#3a3939 !important;
    font-size:14px !important;
  }
  .main-table{
    padding: 3vw 5vw 6vw 5vw;
  }
  .footer-color{
    background-color:#41a3f0 !important;
  }
  table{
    padding:20px;
  }
  th{
    color:#3a3939 !important;
    
    text-align: left;
    font-size: 7px;
    padding-bottom: 10px;
  }
  td{
    font-size:6px;
  }
  a{
    color:white !important;
  }

</style>