<template>
      <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
Reddit posts for: Bitcoin.
</div>

<div v-for="comment in comments" :key="comment.data.id" class="container mx-auto bg-gray-800 p-1 text-orange-500">
         <div class="border-solid border-2 border-gray-600 px-3">
          <div><a :href="comment.data.url">{{ comment.data.title }}</a></div>
            <div class="text-orange-400 text-sm">{{ comment.data.ups }} Upvotes | {{ comment.data.num_comments }} Comments  |  Author: {{ comment.data.author }}</div>
      </div></div>
</template>

<script>
export default {
    name: 'reddit',
    props: {
    icon: {
      type: String,
      required: true
    }
  },
    data () {
    return {
       comments: []
    }
    },
  created() {
    fetch('https://www.reddit.com/r/bitcoin.json?limit=20')
      .then(response => response.json())
      .then(data => {
        this.comments = data.data.children
        })
  }, 

}
</script>

<style>

</style>