<template>
  <div id="app">
    <GuideSidenav></GuideSidenav>
  </div>
</template>

<script>
import GuideSidenav from './components/GuideSidenav.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    GuideSidenav
  },
  computed:{
    ...mapState(['userinfo'])
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  *
    //font-family Simsun
    font-family YaHei
  body
    padding-right: 0px !important
    overflow hidden

</style>
