<template>
   <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
<h1 class="text-2xl ">My Portfolio</h1>
</div>
{{coinData}}
 <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
<div class="flex flex-row bg-gray-800 text-orange-500">
   <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
<table class="table-auto text-xl"> 
  	<thead>
	<tr>
        <th class="px-4 py-2">Coin</th>
        <th class="px-4 py-2">Amount</th>
        <th class="px-4 py-2">Total</th>
   </tr>
		</thead>
  <tr v-for="(value, cryptoicon) in coinData" v-bind:key="value">
     <td class="border px-4 py-2">{{cryptoicon}}</td>
  <td class="border px-4 py-2 text-center  text-yellow-400 font-semibold">{{value.USD}}</td>
   <!--  <td class="border px-4 py-2">$ {{getTotals(value.EUR.PRICE.substring(2)),cryptoicon}}</td>    -->
 <td class="border px-4 py-2"> {{}}</td>
 </tr>
 </table>

 {{ethPrice}}
   </div> </div></div>
</template>.
<script>
export default {
    data () {
    return {
       myCoins: [], // Portfolio: Array of objects for our coins + value.  From: mounted
        coinData: [],
           errors: [],
    coinGrandTotal: [0],
            }
    },

// Loop over myCoins and multiply with the EUR price value from coindata
 computed: {
         ethPrice: function () {
           let tmpCoinData = this.coinData
         //  var tmp = 'ETH'
       return this.tmpCoinData.BTC.USD
      }
   },


created() {
  // Simple GET request using fetch
  fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR")
    .then(response => response.json())
    .then(data => (this.coinData = data));

    if (localStorage.getItem('myCoins')) {
      try {
        this.myCoins = JSON.parse(localStorage.getItem('myCoins'));
      } catch(e) {
        localStorage.removeItem('myCoins');
      }
    } 
}
    }
</script>