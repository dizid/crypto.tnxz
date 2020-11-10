<template>
   <div class="container mx-auto bg-gray-700 p-3 text-orange-500 md:font-bold">
Resources for: {{icon}}
</div>
 <div class="container mx-auto bg-gray-800 p-3 text-orange-500">
<table class="table-auto text-xl">
  <thead>
    <tr>
      <th class="px-4 py-2">Resource</th>
      <th class="px-4 py-2">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a :href="'https://www.cryptocompare.com/coins/' + icon.toLowerCase() + '/overview/eur'" target="_blank">Cryptocompare</a></button></td>
      <td class="border px-4 py-2">Prices, charts, research, news, API</td>
     </tr>
     <tr>
     <td class="border px-4 py-2">
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a :href="'https://cointelegraph.com/search?query=' + icon.toLowerCase()" target="_blank">Cointelegraph</a></button></td>
      <td class="border px-4 py-2">News, magazine, research, markets</td>
    </tr>
    <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://cryptoslate.com/?s=' + icon.toLowerCase()" target="_blank">Cryptoslate</a></button></td> 
      <td class="border px-4 py-2">People, Companies, Trending, Prices</td>
      </tr>
      <tr><td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://bitcoinist.com/?s=' + icon.toLowerCase()" target="_blank">Bitcoinist</a></button></td> 
      <td class="border px-4 py-2">Extended news, Tech, Industry, HowTo</td>
      </tr>
 <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://www.forbes.com/search/?q=' + icon.toLowerCase()" target="_blank">Forbes</a></button></td> 
      <td class="border px-4 py-2">Extended news</td>
      </tr>
      <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://www.coinspeaker.com/?s=' + icon.toLowerCase()" target="_blank">Coinspeaker</a></button></td> 
      <td class="border px-4 py-2">Guides, Tech, Markets, Business, ICO's</td>
      </tr>
      <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://blockonomi.com/?s=' + icon.toLowerCase()" target="_blank">Blockonomi</a></button></td> 
      <td class="border px-4 py-2">News, Prices</td>
      </tr>
  <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://www.investinblockchain.com/?s=' + icon.toLowerCase()" target="_blank">Investblockchain</a></button></td> 
      <td class="border px-4 py-2">News, Guides</td>
      </tr>
  <tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://cryptopotato.com/?s=' + icon.toLowerCase()" target="_blank">Cryptopotato</a></button></td> 
      <td class="border px-4 py-2">Analysis</td>
      </tr>
<tr>
       <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a :href="'https://coingape.com/?s=' + icon.toLowerCase()" target="_blank">Coingape</a></button></td> 
      <td class="border px-4 py-2">News, Analysis, Education</td>
      </tr>

  </tbody> 
</table></div>
</template>

<script>
export default {
  name: 'resouces',
    props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>