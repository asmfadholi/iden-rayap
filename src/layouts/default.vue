<template>
  <div>
    <Headful :title="$route.meta.title" />
    <router-view />
  </div>
</template>

<script>
import Headful from '@/components/Headful';

export default {
  // eslint-disable-next-line
  name: 'default',
  components: {
    Headful,
  },
};
</script>
