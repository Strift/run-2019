<template>
  <div
    class="w-full relative lg:absolute pb-1 hover:-mt-1 cursor-pointer mb-2 lg:mb-0"
    :style="`${positionStyle}`"
    @click="test"
  >
    <div :class="`w-full h-full flex flex-col p-2 rounded bg-cover bg-center ${cardClasses}`" :style="`background-image: url('${image}'); box-sizing: border-box;`">
      <div class="flex flex-row">
        <div>
          <div :class="`font-semibold mr-2 ${textClasses}`">{{ title }}</div>
          <div v-if="displayTime" :class="`mt-1 ${textClasses}`">
            {{ begin | hourString }} <span v-if="duration && !infinite">- {{ begin+duration | hourString }}</span>
          </div>
        </div>
        <div v-if="everyone" class="ml-auto text-center p-1 flex-none h-6 w-6 bg-yellow text-black rounded-full">&#9733;</div>
      </div>
      <div class="mt-auto text-right">
        <img
          v-for="tag in tags"
          :src="`/icons/${tag}.png`"
          :key="tag"
          class="rounded-full p-2 h-12"
          style="background: rgba(0, 0, 0, 0.6)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityDetails from '@/components/ActivityDetails'

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
    image: {
      type: String,
      default: null
    },
    everyone: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array,
      default: () => []
    },
    infinite: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    displayTime: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      baseHeight: 100 / 7 / 2
    }
  },
  filters: {
    hourString: function (value) {
      if (value % 1 === 0.5) return Math.floor(value).toString() + 'h30'
      return Math.floor(value).toString() + 'h00'
    }
  },
  computed: {
    positionStyle () {
      if (this.$mq !== 'lg' && this.$mq !== 'xl') return ''
      return `top: ${(this.begin - 8) * this.baseHeight}%; height: ${this.duration * this.baseHeight}%`
    },
    textClasses () {
      if (this.image) return 'text-white text-shadow'
      return 'text-black'
    },
    cardClasses () {
      let classes = ''
      if (this.image) {
        classes += 'shadow-md hover:shadow-lg'
        if (this.infinite) {
          classes += ' opacity-fade'
        }
        if (this.everyone) {
          classes += ' border-2 border-yellow-dark'
        }
      }
      return classes
    }
  },
  methods: {
    test () {
      this.$modal.show(ActivityDetails, {
        title: this.title,
        begin: this.begin,
        duration: this.duration,
        tags: this.tags,
        everyone: this.everyone,
        description: this.description
      }, {
        height: 'auto'
      })
    }
  }
}
</script>

<style lang="scss">
.opacity-fade {
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)) 60%, to(rgba(0,0,0,0)) 100%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}
</style>
