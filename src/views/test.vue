<template>
<!-- coindata {{coinData}}<br> WORKS - mostly
coinData.BTC.USD {{coinData.BTC.USD}}<br>   -->
 Method showMyCoins: {{showMyCoins()}} <br> 
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

// Doel hier is de  prijs van iedere coin in localStorage opzoeken in de fetch data van crypto compare
// OOK hier dus voornamelijk undefined-achtige errors :(

methods: { 
  async showMyCoins ()  {  
 // let  Amount = this.myCoins
   let Price = this.coinData
const priceArray = this.myCoins.map(element => element.coin);

console.log(await(priceArray)); // 
        } 
  }, 
 
async created() {
   await  fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR")
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