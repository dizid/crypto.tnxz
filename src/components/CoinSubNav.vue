<template>
  <div>
   <div>
      <router-link  :to="'/coin/' + icon + '/links'">
        Resources
      </router-link>
      <router-link  :to="'/coin/' + icon + '/reddit'">
        Reddit
      </router-link>
      <router-link :to="'/coin/'+ icon + '/twitter'">
        Twitter
      </router-link>
      <router-link :to="'/coin/'+ icon + '/youtube'">
        Youtube
      </router-link>
   </div>
  <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coinsubnav',
    props: {
    icon: {
      type: String,
      required: true
    }
  }
 }
</script>