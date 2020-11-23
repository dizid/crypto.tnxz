<template>
<div>
      <!--  <flipside v-bind:icon=icon /> -->
     <getNomicData v-bind:icon=icon />
</div>
</template>
<script>
import getNomicData from "@/components/NomicsData"
/* import flipside from "@/components/Flipside" */
export default {
     props: {
    icon: {
      type: String,
      required: true
    }
  },
components: {getNomicData, /* flipside */}
}
</script>