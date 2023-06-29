<template>
  <div id="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">
          order by title
        </button>
        <button @click="handleClick('location')">
          order by location
        </button>
        <button @click="handleClick('salary')">
          order by salary
        </button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order"/>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, toRefs} from "vue";
import {Job, OrderTerm} from './types/Job'
import JobsList from "@/components/JobsList.vue";

export default defineComponent({
  components: {JobsList},
  setup() {
    const state = reactive({
      name: "khanh",
      age: 25 as number | string
    })
    const jobs = ref<Job[]>([
      {title: "farm worker 1", location: "London", salary: 30000, id: '1'},
      {title: "farm worker 2", location: "Russia", salary: 32000, id: '2'},
      {title: "farm worker 3", location: "Japan", salary: 10000, id: '3'},
      {title: "farm worker 4", location: "Vietnam", salary: 24000, id: '4'},
    ])
    const order = ref<OrderTerm>('title')
    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return {...toRefs(state), jobs, handleClick, order}
  },
  data() {
    return {
      name: 'Link' as number | string
    }
  },
  methods: {
    changeName(name: string): string {
      this.name = name
      console.log(name)
      return this.name
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
