<template>
  <div id="scheduler">
    <h1>{{ scheduler }}</h1>
    <!-- Output all jobs in the array, as user adds more jobs.
    Update jobs by editing text directly. -->
    <div v-for="job in jobsArray" contenteditable="true">
      <strong>Job:</strong> {{ job }}
    </div>
    <div v-if="showForm">
      <!-- Get user input for adding jobs -->
      <input v-model="jobModel" type="text">
      <button v-on:click="postJob(jobModel)">Save</button>
      <button v-on:click="showForm = false">Cancel</button>
    </div>
    <div v-else>
      <!-- Toggle between showing input fields,
      when true the input field section is shown -->
      <button v-on:click="showForm = !showForm">Add new job</button>
    </div>
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
    // Determine whether to show user input section
    toggleForm: function() {
      showForm = !showForm;
    },
    // Add job from input field
    postJob: function(jobModel) {
      this.jobsArray.push(jobModel)
      this.jobModel = ''
    }
  }
};
</script>
