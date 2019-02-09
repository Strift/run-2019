<template>
  <div class="p-4 rounded font-sans">
    <div class="font-semibold text-xl">{{ title }}</div>
    <div v-for="tag in tags" :key="tag" class="flex">
      <img :src="`/icons/${tag}.png`" class="rounded-full bg-blue p-2 h-12 w-12">
      <div class="my-auto ml-2">
        {{ tag | tagDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    begin: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    tagDescription (tag) {
      const description = {
        'shoes': 'Marche',
        'swimsuit': 'Baignade'
      }
      return description[tag]
    }
  }
}
</script>
