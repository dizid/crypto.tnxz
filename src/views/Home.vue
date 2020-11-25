<template>
<div class="container mx-auto bg-gray-800 p-2">
  <div class="flex flex-row bg-gray-800 text-orange-500">
   <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
    	<table class="table-auto text-xl"> 
		<thead>
			<tr>
			  <th class="px-4 py-2">Name</th>
			  <th class="px-4 py-2"><span>&#8364;</span> Price</th>
			  <th class="px-4 py-2">$ Price</th>
			  <th class="px-4 py-2">Change %</th>
			  <th class="px-4 py-2">Icon</th>
			</tr>
		</thead>
		<tbody>
		<tr v-for="(value, cryptoicon) in coinData" v-bind:key="value"><!-- value: whole result array -->
				 <td class="border px-4 py-2">
					 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
					 <router-link :to="'/coin/'+ cryptoicon + '/links'" class="button">{{cryptoicon}}</router-link></button></td>
			  <td class="border px-4 py-2">{{value.EUR.PRICE}}</td>
			  <td class="border px-4 py-2">{{value.USD.PRICE}}</td>
 			 <td class="border px-4 py-2 text-green-400">
				 <span v-if="value.EUR.CHANGEPCT24HOUR < 0" class="text-red-500" > {{value.EUR.CHANGEPCT24HOUR}}</span>
				  <span v-else class="text-green-500" > {{value.EUR.CHANGEPCT24HOUR}}</span>
				</td>
				 <td class="border px-4 py-2 bg-gray-200">
					  <router-link :to="'/coin/'+ cryptoicon + '/links'" class="button">
					  <img :src="'https://www.cryptocompare.com' + value.EUR.IMAGEURL" width="40" height="40">
					  </router-link>
					  </td>
		</tr>
		</tbody>
	</table>
  </div> </div></div>
</template>
<script>
export default {
  name: 'Home',
  data: () => ({
    coinData: [],
	errors: [],
	loading: true
  }),
 created () {
	  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,DOT,ETH,ENJ,EOS,ANKR,CRO,BNB&tsyms=USD,EUR')
        .then(response => response.json())
    	.then(data => (this.coinData = data.DISPLAY))
		.catch(e => {this.errors.push(e)})
  }
}
</script>


