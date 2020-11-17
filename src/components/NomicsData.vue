<template>
   <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
 
prop: icon: {{icon}}
</div>
<div v-if="loading">
    ...loading data...
</div>
<div v-else class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
    <ul>
 <li> Coin: {{cryptocoins[0].name}}</li>
 <li> Price: &euro; {{cryptocoins[0].price}}</li>
 <li> Logo: <img :src="cryptocoins[0].logo_url"/></li>
 
    </ul>  
</div>
</template>
<script>
import Nomics from "nomics"; 
export default {
name: 'getNomicData',
 props: {
    icon: {
      type: String,
      required: true
    }
  },
  data() {
		return {
            cryptocoins: [],
            loading: true
		}
	},
 methods: {
    getData: async function () {
        const nomics = new Nomics({apiKey: "16186f60d9df82897d708d0b4a6b3d0b"})
        var cryptocoins = await nomics.currenciesTicker({ids: [this.icon],convert: "EUR"}).then(ticker => (this.cryptocoins = ticker))
         console.log("this.icon: ", this.icon )
        console.log("Nomics cryptocoins: ", cryptocoins[0].id )
        this.loading = false
    return this.cryptocoins
    }
    },
created: function () {
      this.getData()
    }
}
</script>