<template>
<div class="container mx-auto bg-gray-800 p-2">
  <div class="flex flex-row bg-gray-800 text-orange-500">
   <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
     Flipside API data comes here<br>
 ICON:  {{icon}}<br>
</div>
</div>
</div>
<div class="container mx-auto bg-gray-800 p-1 text-orange-200">

  <ul v-for="metric in projectMetrics" v-bind:key="metric.value">
<li>{{metric.valuel}}</li>
<li>{{metric.symbol}}</li>
  </ul>

</div>


</template>

<script>
export default {
name: 'flipside',
 props: {
    icon: {
      type: String,
      required: true
    }
  },
   data () {
    return {
         projectMetrics : []
    }
    },

created() {
    var raw = "{\n	\"metric\": \"fcas\",\n	\"change_over_in_days\": 7\n}"
    var requestOptions = {method: 'POST', body: raw, redirect: 'follow'}

  fetch("https://api.flipsidecrypto.com/api/v2/metrics/rank/projects?api_key=859ef751-6cdb-4a45-93de-3f02e44426f7", requestOptions)
 .then(response => response.json())
    .then(result => this.projectMetrics = result)
//    .then(console.log(this.projectMetrics))
   .catch(error => console.log('error', error))
   }
} 

/* let respDataStr = response.data
let jsObject = JSON.parse(respDataStr)
this.windows = jsObject */


</script>

<style>

</style>