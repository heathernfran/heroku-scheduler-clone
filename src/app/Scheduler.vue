<template>
  <div id="scheduler">
    <h1>{{ scheduler }}</h1>
    <!-- Output all jobs in the array, as user adds more jobs.
    Update jobs by editing text directly. -->
    <div v-for="job in jobsArray" contenteditable="true">
      <strong>Job:</strong> {{ job }}
    </div>
    <div v-if="showForm">
      <job-form-component></job-form-component>
    </div>
    <div v-else>
      <!-- Toggle between showing input fields,
      when true the input field section is shown -->
      <button v-on:click="showForm = !showForm">Add new job</button>
    </div>
  </div>
</template>

<script>
import JobForm from './JobForm.vue';

export default {
  name: 'Scheduler',
  components: {
    'job-form-component': JobForm
  },
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
