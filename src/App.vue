
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store.js';
import axios from 'axios';

export default {
  name:'App',
  data(){
    return{
      store,
    }
  },
  components:{
      AppHeader,
      AppMain,
    },
    methods:{
      getApi(){
        axios.get(store.breakingBadURL)
        .then( result => {
          store.bbCharacters = result.data;
          console.log(store.bbCharacters.length);
          console.log(store.bbCharacters);
          store.isApiDone = true;
        })
        .catch( error =>{
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

    <main>
       <AppMain/>
   </main>
  </div>
</template>


<style lang="scss">
    @use './styles/general.scss' as *;
</style>