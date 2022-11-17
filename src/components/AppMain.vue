
<script>
import ScCard from './ScCard.vue';
export default {
    name:'AppMain',
    components:{
        ScCard,
    }
}
</script>


<template>
    <div class="row">
        <div class="col">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-2">
                        <select class="form-select" aria-label="Default select example">
                                <option value="2">Breaking bad</option>
                                <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="container-fluid">
                            <div class="row found-wrapper mx-auto py-3">
                                <div class="col founded d-flex align-content-center">
                                    <p>found</p>
                                </div>
                            </div>
                            <div class="row card-wrapper justify-content-start flex-wrap">
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                                <ScCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .container-fluid{
        background: white;

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
            width: 80%;
            margin: 0 auto;
            background: green;
        }
    }

</style>