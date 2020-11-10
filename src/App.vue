<template>
 <div class="container mx-auto bg-gray-700 p-4 text-yellow-400">
    <nav class="flex justify-between">
        <div>
             <router-link to="/" class="text-lg text-grey-darkest hover:text-blue-dark ml-2 no-underline hover:underline">Home</router-link>
        </div>
        <ul class="flex flex-row">
            <!--   <li class="pr-5 no-underline hover:underline"><router-link to="/signals" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Trade Signals</router-link></li> -->
             <li class="pr-5 no-underline hover:underline"><router-link to="/search" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Crypto Search Engine</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link to="/news" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">News</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link to="/about" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</router-link></li>
            </ul>
    </nav>
</div>
   <div>
   <router-view/>
  </div>
</template>

