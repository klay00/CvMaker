<template>
   <div class="contenar">
    <div class="left-info">
        <HeaderPart v-if="counter===0"/>   
        <Information  v-if="counter===1"/>   
        <Education  v-if="counter===2"/>   
        <Experins  v-if="counter===3"/>   
        <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="handelBackComponent"> Back</button>
            <button class="btn" v-if="counter < 3" @click="handelCangeComponent">Next</button>
        </div>
        
    </div>
    <div class="right-cv">

    </div>
   </div>

</template>

<script>
import HeaderPart from "../components/HeadPart.vue"
import Education from "../components/EducationSkillsLanguages.vue"
import Experins from "../components/ExperincePart.vue"
import Information from "../components/InfoPart.vue"
export default{
   components:{
    HeaderPart,
    Experins,
    Education,
    Information
   },
   data(){
    return{
        counter:0
    }
   },
   methods:{
    handelCangeComponent(){
        if (this.counter < 3) {
          this.counter +=1  
        }
    },
    handelBackComponent(){
          this.counter -=1  
    }
   }
}
</script>
<style>
.contenar{
    display: flex;
    margin: 5vh 10vw;
    height: 90vh;
    gap: 20px;
}
.contenar >div{
    flex: 1;
    background-color: var(--item-color);
    border-radius: 20px;
    box-shadow: 0 0 20px -10px;
    padding: 10px;
    overflow: auto;
}
.left-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.buttnes{
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
}
.btn{
    height: 40px;
    width: 120px;
    border-radius: 15px;
    padding: 0 20px;
    border: 0;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    background-color: var(  --text-lighti-color);
}
.btn-back{
    height: 40px;
    width: 120px;
    border-radius: 15px;
    padding: 0 20px;
    border: 0;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
   background-color: transparent;
}
.btn-back:hover{
    text-decoration: underline;
 }
.btn:hover{
    background-color: #78acbd;
}
</style>