<template>
<div class="container">
<section class="section">
<coinsubnav :icon=icon />  
</section>
<section class="section">
<router-view name="submenu"/>
</section>
</div>
</template>

<script>
import reddit from '../components/Reddit'
import coinsubnav from '../components/CoinSubNav'
export default {
components: {reddit, coinsubnav},

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
