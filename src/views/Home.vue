<template>
  <div class="flex flex-row bg-gray-800 text-orange-500">
 
  <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
    	<table class="table-auto text-xl">
		<thead>
			<tr>
			  <th class="px-4 py-2"></th>
			  <th class="px-4 py-2">Name</th>
			  <th class="px-4 py-2"><span>&#8364;</span> Price</th>
			  <th class="px-4 py-2">$ Price</th>
			  <th class="px-4 py-2">Change% 24h</th>
			 <th class="px-4 py-2">Change% 1h</th>
			</tr>
		</thead>
		<tbody>
					<tr v-for="(value, cryptoicon) in coins" v-bind:key="value">
			  <!-- <th> <img :src="'/static/img/' + cryptoicon + '.svg'"/></th> -->
			  <td class="border px-4 py-2 bg-blue-200"><img :src="'https://www.cryptocompare.com' + value.EUR.IMAGEURL" width="40" height="40"></td>
				 <td class="border px-4 py-2">
					 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					 <router-link :to="'/coin/'+ cryptoicon" class="button">{{cryptoicon}}</router-link></button></td>
			  <td class="border px-4 py-2">{{value.EUR.PRICE}}</td>
			  <td class="border px-4 py-2">{{value.USD.PRICE}}</td>
			 <td class="border px-4 py-2">{{value.EUR.CHANGEPCT24HOUR}}</td>
			 <td class="border px-4 py-2">{{value.EUR.CHANGEPCTHOUR}}</td>
			</tr>
		</tbody>
	</table>
  </div> </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'home',
  data: () => ({
    coins: [],
    errors: []
  }),

  created () {
      axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOT,CRO,EUR&tsyms=USD,EUR')
      .then(response => {
      	this.coins = response.data.DISPLAY
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
