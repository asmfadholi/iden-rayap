<template>
  <div/>
</template>

<script>

export default {
  name: 'Headful',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  watch: {
    title() {
      document.title = this.title;
    },
  },
  created() {
    document.title = this.title;
  },
};

</script>
