
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store'
import axios from 'axios';

export default {
  name:'App',
  components:{
      AppHeader,
      AppMain,
    },
    methods:{
      getApi(){
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(result => {
          console.log(result.data);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi();
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