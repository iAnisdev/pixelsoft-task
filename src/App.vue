<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'app',
  components:{
    navbar
  },
  data () {
    return {
    }
  }
}
</script>
