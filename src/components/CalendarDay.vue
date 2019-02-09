<template>
  <div class="flex-1 flex flex-col px-1" :key="title">
    <div class="h-10 font-semibold text-sm text-grey uppercase text-center ">{{ title }}</div>
    <div class="mb-4 lg:mb-0 lg:flex-grow relative">
      <div v-if="away" class="p-2 font-semibold text-grey">Laurane & Laurent family day</div>
      <CalendarActivity
        v-for="(activity, i) in activities"
        :title="activity.title"
        :begin="activity.begin"
        :duration="activity.duration"
        :image="activity.image"
        :everyone="activity.everyone"
        :tags="activity.tags"
        :infinite="activity.infinite"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import CalendarActivity from '@/components/CalendarActivity'

export default {
  components: {
    CalendarActivity
  },
  props: {
    title: {
      type: String,
      required: true
    },
    away: {
      type: Boolean,
      default: false
    },
    activities: {
      type: Array,
      required: true
    }
  }
}
</script>
