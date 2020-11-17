<template>
<div>
     <getNomicData v-bind:icon=icon />
</div>
</template>
<script>
import getNomicData from "@/components/NomicsData"
export default {
     props: {
    icon: {
      type: String,
      required: true
    }
  },
components: {getNomicData}
}
</script>