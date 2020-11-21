<template>
<!-- coindata {{coinData}}<br> WORK - mostly -->
<!-- coinData.BTC.USD {{coinData.BTC.USD}}<br>   -->
<!-- Method showMyCoins: {{showMyCoins()}} <br> -->
<!-- Method showCoinData: {{showCoinData()}} <br>  coinData is Undefined  -->
</template>
<script>
import { ref } from "vue";
export default {
name: "Test",
setup() {
let coinData = ref(0)
 let  myCoins = ref(0)
   return { coinData, myCoins };
},
methods: {
  showMyCoins ()  {
       this.myCoins.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
              console.log(`${key} ${value}`);
          })
          console.log('---------------------')
        })
  }
 },
created() {
    fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR")
      .then(response => response.json())
      .then(data => (this.coinData = data))
console.log("coindata.BTC.USD: ", this.coinData.BTC.USD)
  
    if (localStorage.getItem('myCoins')) {
      try {
        this.myCoins = JSON.parse(localStorage.getItem('myCoins'))
      } catch(e) {
        localStorage.removeItem('myCoins')
      }
    }
}
}

</script>