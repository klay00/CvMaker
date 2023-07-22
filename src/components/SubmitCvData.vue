<template>
   <div class="left-info">
        <h1>Submit Cv</h1>

        <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
            <button class="btn" v-if="counter < 5" @click="$emit('next')">Next</button>
        </div>
        
        </div>
</template>

<script>
export default {
    props:['counter']
}
</script>

<style>

</style>