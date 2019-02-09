<template>
  <div class="flex-col text-right mx-1 text-grey">
    <div class="h-10"></div>
    <div v-for="hour in hours" class="flex-1 pt-2" :key="hour">
      {{ hour }}h
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hours: {
      type: Array,
      required: true
    }
  }
}
</script>
