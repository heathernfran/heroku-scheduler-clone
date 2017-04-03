<template>
  <div id="scheduler">
    <h1>{{ scheduler }}</h1>
    <div class="">
      {{ jobModel }}
    </div>
    <div v-if="showForm">
      <form class="" action="/" method="post">
        <input v-model="jobModel" type="text" name="" value="">
        <!-- <button v-on:click="postJob" type="button" name="button">Save</button> -->
      </form>
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
      scheduler: 'Heroku Scheduler Clone',
      showForm: false,
    };
  },
  methods: {
    postJob: function(event) {}
  }
};
</script>
