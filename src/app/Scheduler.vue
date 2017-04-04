<template>
  <div id="scheduler">
    <h1>{{ scheduler }}</h1>
    <!-- Output all jobs in the array, as user adds more jobs -->
    <div v-for="job in jobsArray">
      Job: {{ job }}
    </div>
    <div v-if="showForm">
      <input v-model="jobModel" type="text">
      <button v-on:click="postJob(jobModel)">Save</button>
    </div>
    <div v-else>
      <h2>Click to add job</h2>
    </div>
    <!-- Toggle between showing input fields,
    when true the input field section is shown -->
    <button v-on:click="toggleForm">Add new job</button>
  </div>
</template>

<script>
export default {
  name: 'Scheduler',
  data() {
    return {
      // Store user input for added jobs
      jobsArray: [],
      scheduler: 'Heroku Scheduler Clone',
      // Default to false, for hiding input field
      showForm: false,
    };
  },
  methods: {
    toggleForm: function() {
      showForm = !showForm
    }
    // Add job from input field
    postJob: function(jobModel) {
      this.jobsArray.push(jobModel)
    }
  }
};
</script>
