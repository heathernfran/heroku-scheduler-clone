import Vue from 'vue';
import Scheduler from './Scheduler.vue';

describe('Scheduler', () => {
  it('should be a Scheduler', () => {
    expect(Scheduler.name).toEqual('Scheduler');
  });

  it('has created a toggleForm hook', () => {
    expect(typeof Scheduler.methods.toggleForm).toBe('function');
  });

  it('has created a postJob hook', () => {
    expect(typeof Scheduler.methods.postJob).toBe('function');
  });

  it('sets the correct showForm data', () => {
    expect(Scheduler.data().showForm).toBe(false);
  });

  it('sets the showForm to true', done => {
    const vueScheduler = new Vue(Scheduler).$mount();
    vueScheduler.showForm = !vueScheduler.showForm;
    Vue.nextTick(() => {
      expect(vueScheduler.showForm).toBe(true);
      done();
    });
  });

  it('sets the correct jobsArray data', () => {
    expect(Scheduler.data().jobsArray).toEqual([]);
  });

  it('adds data to the jobsArray', done => {
    const vueScheduler = new Vue(Scheduler).$mount();
    vueScheduler.postJob('test job');
    Vue.nextTick(() => {
      expect(vueScheduler.jobsArray).toEqual(['test job']);
      done();
    });
  });

});
