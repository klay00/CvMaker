<template>
   <div class="left-info">
        <h1>Submit Cv</h1>
           <div class="print-btn">
            <button class="btn" @click="handelPrint">Print Or Download</button>
           </div>
        <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
            <button class="btn" v-if="counter < 5" @click="$emit('next')">Next</button>
        </div>
        
        </div>
</template>

<script>
export default {
    props:['counter'],
    methods:{
        handelPrint(){
            window.print();
        }
    }
}
</script>

<style>
.print-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>