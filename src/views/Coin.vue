<template>
<coinsubnav :icon=icon />  

<div>
<router-view name="submenu"/>
</div>
</template>

<script>
import reddit from '../components/Reddit'
import coinsubnav from '../components/CoinSubNav' // TODO these 2 imports needed? or import also tweets, links, video, ?
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
