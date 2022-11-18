
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './data/store.js';
import axios from 'axios';
import AppSearch from './components/AppSearch.vue';

export default {
  name:'App',
  data(){
    return{
      store,
    }
  },
  components:{
      AppSearch,
      AppHeader,
      AppMain,
    },
    methods:{
      getApi(){
        store.bbCharacters= [];
        store.isApiDone= false;
        axios.get(store.breakingBadURL,{
          params:{
            category: store.selectedSerie,
          }
        })
        .then( result => {
          store.bbCharacters = result.data;
          store.isApiDone = true;
        })
        .catch( error =>{
          console.log(error);
        })
      },
      searchFilter(){
        this.getApi();
      }
    },
    mounted(){
      this.getApi();
    }
}
</script>

<template>

  <div class="container-fluid">
    <div class="row mb-5">

      <AppHeader/>
    </div>

    <main>
      <div class="row">
        <div class="col">
          <div class="container">
            <AppSearch @performSearch="searchFilter"/>
            <AppMain/>
          </div>
        </div>
      </div>
   </main>
  </div>
</template>


<style lang="scss">
    @use './styles/general.scss' as *;
</style>