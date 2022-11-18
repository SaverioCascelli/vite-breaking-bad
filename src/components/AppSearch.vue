
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
            <select v-model="store.selectedSerie" class="form-select">
                <option selected value="">Seleziona una serie</option>
                <option value="breaking bad">Breaking bad</option>
                <option value="better call saul">Better Call Soul </option>
            </select>
        </div>
        <div class="col-1">
            <button  @click="$emit('performSearch')" type="button" class="btn btn-light">Cerca</button>
        </div>
    </div>
  
</template>

<style>

</style>