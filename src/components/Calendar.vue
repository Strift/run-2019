<template>
  <div class="h-full flex flex-col lg:flex-row px-1 py-2">
    <LegendHours :hours="hours" class="hidden lg:flex"/>
    <CalendarDay
      v-for="day in days"
      :title="day.title"
      :activities="day.activities"
      :away="day.away"
      :key="day.title"
      class="h-full"
    />
  </div>
</template>

<script>
import LegendHours from '@/components/LegendHours'
import CalendarDay from '@/components/CalendarDay'

const days = require('@/assets/days.json')

export default {
  components: {
    LegendHours,
    CalendarDay
  },
  data () {
    return {
      hours: ['8', '10', '12', '14', '16', '18', '20'],
      days: days
    }
  }

}
</script>
