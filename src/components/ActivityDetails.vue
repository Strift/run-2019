<template>
  <div class="p-4 rounded font-sans">
    <div class="flex flex-row">
      <div class="font-semibold text-xl">{{ title }}</div>
      <div v-if="everyone" class="ml-auto">
        <div class="ml-2 text-center p-1 inline-block h-6 w-6 bg-yellow text-black rounded-full">&#9733;</div>
      </div>
    </div>
    <div class="mt-3 text-grey-dark leading-normal">
      {{ description }}
    </div>
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
    },
    everyone: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
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
