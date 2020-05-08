<template>
  <div class="outer">
    <div class="inner">
      <section class="left-section">
        <div class="contet-box">
          <p>{{ todayTopRanker.content }}</p>
        </div>
        <div class="contet-box">
          <p>{{ yesterdayTopRanker.content }}</p>
        </div>
        <div class="contet-box">
          <p>{{ campaign.content }}</p>
        </div>
      </section>
      <section class="right-section">
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      todayTopRanker: {
        content: "todayTopRankerMessageeeeeeeeeeeee"
      },
      yesterdayTopRanker: {
        content: "yesterdayTopRankerMessageeeeeeeeeeeee"
      },
      campaign:{
        content: "campaignMessageeeeeeeeeeeee"
      }
    }),
  }
</script>

<style scopped>
  .outer{
    width:100%;
    display:flex;
    justify-content:center;
  }
  .inner{
    width:100%;
    max-width:90%;
    display:flex;
  }
  .right-section{
    background-color:yellow;
    width:30%;
    height:100%;
  }
  .left-section{
    background-color:#dedede;
    width:70%;
    height:100%;
  }
  .contet-box{
    width:95%;
    height:350px;
    padding:5px;
    background-color:red;
    margin:50px auto;
  }
</style>