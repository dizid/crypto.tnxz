<template>
   <div class="container mx-auto bg-gray-700 p-3 md:font-bold">
<div id="searchbox" class="gcse-searchbox"></div>
</div>

 <div class="container mx-auto p-3">
  
    <div class="gcse-searchresults"></div>
  </div>
</template>

<script>
export default {
 mounted: function() {
 let PSEScript = document.createElement("script");
      PSEScript.setAttribute(
        "src",
        ["https://cse.google.com/cse.js?cx=9a0cb90330a0c39cf"]
      );
      document.head.appendChild(PSEScript);
 }
}
</script>

<style>

</style>