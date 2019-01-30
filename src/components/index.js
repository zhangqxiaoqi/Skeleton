import Skeleton from './Skeleton.vue';
const VueSkeleton = {
  install: function (Vue) {
    Vue.component('VueSkeleton', Skeleton);
  }
};
export default VueSkeleton;
