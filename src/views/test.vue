<template>This works as expected: {{coindata.ETH.USD.PRICE}}<br>

  <!-- Computed: {{getPrice()}}  -->
</template>
<script>
import axios from 'axios'
import { onMounted } from 'vue'
export default {
    data: () => ({ 
    coindata: [null]
  }),
 methods: {
  getPrice() {
    var tmp = 'ETH'
        var price = this.coindata[ETH][USD][PRICE]
        return price

   },
    async getCoinData() {
  // fetch data from a url endpoint
  const coindata = await  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR').then(response => {
      	this.coindata = response.data.DISPLAY
      })
  return this.coindata
}
    },
   
created() { 
    this.getCoinData()
        }
        }
</script>

