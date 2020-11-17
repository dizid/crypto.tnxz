<template>
<div v-if="icon">
      <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
        <div class="flex flex-row">
    <div class="px-5"><img src="@/assets/reddit.png" width="30" height="30"></div><div> Reddit posts for: {{icon}}</div>
        </div>
</div>
<div v-for="comment in comments" :key="comment.data.id" class="container mx-auto bg-gray-800 p-1 text-orange-200">
         <div class="border-solid border border-gray-600 px-3">
          <div><a :href="comment.data.url">{{ comment.data.title }}</a></div>
            <div class="text-orange-400 text-xs">{{ comment.data.ups }} Upvotes | {{ comment.data.num_comments }} Comments  |  Author: {{ comment.data.author }}</div>
      </div></div></div>
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
    fetch('https://www.reddit.com/r/' + this.icon + '.json?limit=20')
      .then(response => response.json())
      .then(data => {
        this.comments = data.data.children
        })
  }, 

}
</script>

<style>

</style>