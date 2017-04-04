<template>
  <!-- Get user input for adding jobs -->
  <div id="jobForm">
    <input v-model="jobModel" type="text">
    <button v-on:click="postJob(jobModel)">Save</button>
    <button v-on:click="showForm = false">Cancel</button>
  </div>
</template>

<script>
import Vue from 'vue';

export default new Vue({
  el: '#jobForm',
  name: 'JobForm',
  data: {
    jobsArray: []
  },
  methods: {
    // Add job from input field
    postJob: function(jobModel) {
      this.jobsArray.push(jobModel)
      this.jobModel = ''
    }
  }
});
</script>
