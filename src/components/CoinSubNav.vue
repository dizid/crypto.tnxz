<template>
<header id="top" class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
<nav id="site-menu" class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">
    <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
        <a href="#" class="no-underline py-1">
            <h1 class="font-bold text-lg tracking-widest">LOGO</h1>
        </a>
        <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
            <span class="hamburger__top-bun"></span>
            <span class="hamburger__bottom-bun"></span>
        </button>
    </div>
        <ul class="hidden md:flex md:flex-row" id="menu">
          <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/' + icon + '/tradedata'">Trade data</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/' + icon + '/links'">Resources</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/' + icon + '/reddit'">Reddit</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/'+ icon + '/twitter'">Twitter</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link :to="'/coin/'+ icon + '/youtube'">Youtube</router-link></li>
        </ul>
</nav>
</header>
<div>
<router-view></router-view>
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