<template>
  <div id="scheduler">
    <h1>{{ scheduler }}</h1>
    <div v-for="job in jobsArray" class="">
      Job: {{ job }}
    </div>
    <div v-if="showForm">
      <input v-model="jobModel" type="text" name="" value="">
      <button v-on:click="postJob(jobModel)" type="button" name="button">Save</button>
    </div>
    <div v-else>
      <h2>Click to add job</h2>
    </div>
    <button v-on:click="showForm = !showForm" type="button" name="button">Add new job</button>
  </div>
</template>

<script>
export default {
  name: 'Scheduler',
  data() {
    return {
      jobsArray: [],
      scheduler: 'Heroku Scheduler Clone',
      showForm: false,
    };
  },
  methods: {
    postJob: function(jobModel) {
      this.jobsArray.push(jobModel)
    }
  }
};
</script>
