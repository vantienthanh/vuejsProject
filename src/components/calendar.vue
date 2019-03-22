<template>
  <div>
    <full-calendar :config="config" :events="events"/>
    <input class="form-control mt-4" type="text" name="start" id="start" placeholder="Start">
    <input class="form-control mt-4" type="text" name="end" id="end" placeholder="End">
  </div>
</template>

<script>
import moment from 'moment'
import { FullCalendar } from 'vue-full-calendar'
export default {
  name: 'calendar',
  data () {
    return {
      events: [
        {
          title: 'test',
          allDay: true,
          backgroundColor: 'red',
          start: moment(),
          end: moment().add(1, 'd')
        },
        {
          title: 'another test',
          start: moment().add(2, 'd'),
          end: moment().add(2, 'd').add(2, 'h')
        }
      ],
      config: {
        defaultView: 'month',
        eventRender: function (event, element) {
          console.log(event)
        }
      }
    }
  },
  components: {
    FullCalendar
  }
}
</script>

<style scoped>

</style>
