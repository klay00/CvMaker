<template>
   <div class="contenar">
    <div class="left-info">
        <HeaderPart v-if="counter===0" :counter="counter"  @next="handelCangeComponent"/>   
        <Information  v-if="counter===1" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
        <SkillsLanguages  v-if="counter===2" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
        <Edgucation  v-if="counter===3" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
        <Experins  v-if="counter===4" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
        <SubmitCv  v-if="counter===5" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
    </div>
    <div class="right-cv">

    </div>
   </div>

</template>

<script>
import HeaderPart from "../components/HeadPart.vue"
import SkillsLanguages from "../components/SkillsLanguages.vue"
import Experins from "../components/ExperincePart.vue"
import Information from "../components/InfoPart.vue"
import Edgucation from "../components/Edgucation.vue"
import SubmitCv from "../components/SubmitCvData.vue"
export default{
   components:{
    HeaderPart,
    Experins,
    SkillsLanguages,
    Information,
    Edgucation,
    SubmitCv
   },
   data(){
    return{
        counter:0
    }
   },
   methods:{
    handelCangeComponent(){
        if (this.counter < 6) {
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
    height: 100%;
}
.right-cv{
    height: 100%; 
}
.buttnes{
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
}
.btn{
    height: 40px;
    min-width: 120px;
    border-radius: 15px;
    padding: 0 20px;
    border: 0;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--btn-color);
    cursor: pointer;
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
   cursor: pointer;
}
.btn-back:hover{
    text-decoration: underline;
 }
.btn:hover{
    background-color: #0a0282;
}
</style>