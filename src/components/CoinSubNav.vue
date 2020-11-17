<template>

 <div class="container mx-auto bg-gray-800 p-4 text-orange-400 ">
    <nav class="flex-row md:justify-between">
        <div class="flex flex-row justify-between">
     <p id="hamburgerbtn" class="md:hidden bg-purple-800">menu</p>
        </div>
       <ul class="hidden md:flex md:flex-row" id="mobileMenu">
          <li class="pr-5 no-underline hover:underline"><router-link  :to="'/coin/' + icon + '/tradedata'">Trade data</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link  :to="'/coin/' + icon + '/links'">Resources</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link  :to="'/coin/' + icon + '/reddit'">Reddit</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/'+ icon + '/twitter'">Twitter</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/'+ icon + '/youtube'">Youtube</router-link></li>
        </ul>
    </nav>
</div>

  <div>
      <router-view/>
    </div>
  
</template>
<script>
export default {
  name: 'coinsubnav',
  data: function () {
    return {
      hamburger: ''
        }
  },
  props: {
  icon: {
      type: String,
      required: true
    }
  },
 }
</script>