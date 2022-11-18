
<script>
    import {store } from "../data/store";
export default {
    name: 'AppSearch',
    data(){
        return{
            store,
        }
    }

}
</script>
<template>

    <div class="row mb-5">
        <div class="col-2">
            <select class="form-select" aria-label="Default select example">
                <option value="2">Breaking bad</option>
                <option value="3">Better </option>
            </select>
                    
        </div>
    </div>
  
</template>

<style>

</style>