
<script>
export default {
    name:'ScCard',
    props:{
        charImgUrl: String,
        name: String,
        deadOrAlive: String,
        series: Array,

    }
}
</script>

<template>
    
    <div class="col-2">
        <div class="card mb-3 ">
            <img class="card-img-top" :src="charImgUrl" :alt="name">
            <div class="card-body">
                <h4 class="card-text">{{name}}</h4>
                <p>{{deadOrAlive}}</p>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
    .card{
        background: $primary-clr;
        height: 400px;
        color: gray;
        text-align: center;
        
        img{
            width: 100%;
        }
        h4{
            color: white;
        }
    }
</style>