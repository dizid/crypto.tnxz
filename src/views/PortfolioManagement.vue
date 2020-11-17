<template>
   <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
<h1 class="text-2xl ">Portfolio management</h1>
</div>
 <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
<div class="flex flex-row bg-gray-800 text-orange-500">
   <div class="my-px px-px w-full overflow-hidden xl:my-1 xl:px-1">
<table class="table-auto text-xl"> 
  	<thead>
      <tr>
 <th class="px-4 py-2">    <input v-model="newCoin" class="border border-orange-500 rounded"></th> 
        <th class="px-4 py-2">  <button @click="addCoin" class="bg-blue-500 hover:bg-blue-700 text-yellow-400 font-bold py-1 px-2 rounded" >Add Coin</button></th>
    <th class="px-4 py-2 text-yellow-400 font-thin text-sm text-left">Use the official coins 3-letter abbreviation!</th>
      </tr>
			<tr>
        <th class="px-4 py-2">Coin<span v-if="(myCoins.length > 1)">s</span></th>
        <th class="px-4 py-2">Amount</th>
      			</tr>
		</thead>
  <tr v-for="(myCoin, n) in myCoins">
     <td class="border px-4 py-2">{{myCoin.coin.toUpperCase()}}</td>
  <td class="border px-4 py-2 text-center text-gray-700 font-semibold"> <input v-model="myCoin.amount" @change="saveMyCoins" class="border border-orange-500 rounded"></td>
 <td class="border px-4 py-2"><button @click="removeCoin(n)" class="bg-blue-500 hover:bg-blue-700 text-yellow-400 font-bold py-1 px-2 rounded">Remove coin</button></td>
  </tr>
 </table>
   </div> </div></div>
</template>
<script>
export default {
    data () {
    return {
    amount: 0,
    newCoin: [],
    myCoins: [] // this must hold coin + value
    }
    },
methods: {
    getMyCoins() {  // TODO: Not used.
      return this.myCoins = localStorage.getItem('cryptocurrencies');
    },
    addCoin() {
      if (!this.newCoin) {return}   // ensure they actually typed something
      this.myCoins.push({coin: this.newCoin.toUpperCase(), amount:0})  //  push new coin to myCoins
      this.newCoin = '' // Make newCoin (textfield) empty again
      this.saveMyCoins() // Save the MyCoins to Localstorage
    },
    removeCoin(x) { // It Works, but i don't know why :)
      this.myCoins.splice(x, 1);
      this.saveMyCoins();
    },
    saveMyCoins() {
      const parsed = JSON.stringify(this.myCoins)
      localStorage.setItem('myCoins', parsed)
    } 
},
/* created() {
  this.getMyCoins() 
}, */
  mounted() {
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