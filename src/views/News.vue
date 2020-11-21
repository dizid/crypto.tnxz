<template>
    <div class="container mx-auto bg-gray-800 p-4 text-orange-400" v-for="item in news">
            
      <div><img  v-bind:src="item.imageurl" alt=""></div>
        <div><a v-bind:href="item.guid" target="_blank">{{item.title}}</a></div>
        <div>{{item.body}}</div>
        <div>
         <span><i class="fas fa-thumbs-up"></i></span>
         <span>{{item.upvotes}}</span>
         </div>
         <div>
          <span><i class="fas fa-thumbs-down"></i></span>
          <span>{{item.downvotes}}</span>
          </div>
          <div>
          <span><i>source</i></span>
           <span>{{item.source}}</span>
           </div>
  </div>
</template>
<script>
export default {
  name: 'news',
  data: () => ({
    news: [],
    errors: []
  }),

  created () {
    fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(response => {
        this.news = response.data.Data
        console.log(response.data.Message) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a.title:hover{
  color:#3273dc;
}

</style>