
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name:'App',
  components:{
      AppHeader,
      AppMain,
    }
}
</script>

<template>
  <div class="container-fluid">
    <AppHeader/>
    <AppMain/>
  </div>
</template>


<style lang="scss">
    @use './styles/general.scss' as *;
</style>