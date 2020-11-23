<template>
 <div name="app" class="container mx-auto bg-gray-700 p-4 text-yellow-400">
    <nav class="flex justify-between">
        <div>
             <router-link to="/" class="text-lg text-grey-darkest hover:text-blue-dark ml-2 no-underline hover:underline">Home</router-link>
        </div> 
        <ul class="flex flex-row">
        <!--       <li class="pr-5 no-underline hover:underline"><router-link to="/test" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">test</router-link></li>
              <li class="pr-5 no-underline hover:underline"><router-link to="/viewportfolio" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">View Portfolio</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link to="/portfolio" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Manage Portfolio</router-link></li>  -->
             <li class="pr-5 no-underline hover:underline"><router-link to="/search" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Crypto Search</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link to="/news" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">News</router-link></li>
            <li class="pr-5 no-underline hover:underline"><router-link to="/about" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</router-link></li>
            </ul>
    </nav>
    </div>
     <router-view></router-view>
 
 </template>

