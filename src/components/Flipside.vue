<template>
<div class="container mx-auto bg-gray-800 p-2">
  <div class="flex flex-row bg-gray-800 text-orange-500">
   <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
   props: icon:  {{icon}}<br> 
</div>
</div>
</div>
<div class="container mx-auto bg-gray-800 p-1 text-orange-200">
  <ul v-for="metric in activeCoin" v-bind:key="metric.value">
<li>project_name: {{metric.project_name}}</li>
<li>symbol: {{metric.symbol}}</li>
<li>value: {{metric.value}}</li>
<li>previous_value: {{metric.previous_value}}</li>
  </ul>
activeCoin: {{ activeCoin}}

<!-- projectMetrics: {{ projectMetrics[0] }} -->
</div>
</template>
<script>
export default {
name: 'flipside',
 props: { icon: {
      type: String,
      required: true
    }
  },

   data () { return {
        projectMetrics : [],
        found: []
    }},

/* Julian, 
WAt ik hier probeer te doen: deze pagina heeft een propertie: de actieve cryptocoin, bijvoorbeeld ETH of BTC
Ik wil dan uit projectMetrics alleen de data voor die ene coin filteren / zoeken en die vervolgens in de template weergeven */
computed: { 
activeCoin: function () {
var activeCoinProjectMetrics =  this.projectMetrics.find(item => item.symbol==this.icon)
console.log(this.activeCoin) // Gives:  undefined
// return activeCoinProjectMetrics
}
},

methods:  {
async getFlipside() {
 var raw = "{\n	\"metric\": \"fcas\",\n	\"change_over_in_days\": 7\n}"
  var requestOptions = {method: 'POST', body: raw, redirect: 'follow'}
  fetch("https://api.flipsidecrypto.com/api/v2/metrics/rank/projects?api_key=859ef751-6cdb-4a45-93de-3f02e44426f7", requestOptions)
     .then(response => response.json())
 .then(result => this.projectMetrics = result.data)
 .catch(error => console.log('error', error))
}
},

created () { this.getFlipside() }
}
</script>
