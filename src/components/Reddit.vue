<template>
<div>
      <div>
Reddit posts for: Bitcoin.
</div>
<div v-for="comment in comments" :key="comment.data.id">
          <div><a :href="comment.data.url">{{ comment.data.title }}</a></div>
            <div>{{ comment.data.ups }} Upvotes | {{ comment.data.num_comments }} Comments  |  Author: {{ comment.data.author }}</div>
      </div>
</div>
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