
<script>
import{store} from '../data/store'
export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
  <div class="row mb-5">
    <div class="col-1 logo">
        <img src="/Breaking_Bad_logo.svg" alt="Breaking Bad">
    </div>
    <div class="col">
        <h1>Breaking Bad Api</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

    img{
        width: 100%;
        height: 100%;
    }

    .logo{
        height: 50px;
    }

    .row{
        color: white;
    }
</style>