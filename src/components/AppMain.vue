
<script>
import ScCard from './ScCard.vue'                                
import {store} from '../data/store';
export default {
    name:'AppMain',
    data(){
        return{
            store,
        }
    },
    methods:{
        logIt(){
            console.log(store.isApiDone);
        }
    },
    components:{
        ScCard,
    }
}
</script>


<template>

                <div class="row">
                    <div class="col">
                        <div class="container-fluid bg-white">
                            <div class="row found-wrapper mx-auto py-3">
                                <div class="col founded d-flex align-content-center">
                                    <p>found {{store.bbCharacters.length}} characters</p>
                                </div>
                            </div>
                            <div class="row card-wrapper flex-wrap"
                            v-if="store.isApiDone">
                                <ScCard
                                v-for="char in store.bbCharacters" :key="char.char_id"
                                :name="char.name"
                                :deadOrAlive="char.status"
                                :charImgUrl="char.img"/>
                            </div>
                            <div class="row"
                            v-else>
                                <div class="col">
                                    <p>loading...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<style lang="scss" scoped>

    .container-fluid{

        .found-wrapper{
            width: 90%;
        }
        .founded{
            background:rgb(33, 37, 41) ;
            color: white;
            height: 50px;
            line-height: 50px;
            
        }

        .card-wrapper{
            width: 100%;
            margin: 0 auto;
        }
    }

</style>