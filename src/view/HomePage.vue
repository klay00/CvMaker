<template>
   <div class="contenar">
    <div class="left-info">
        <HeaderPart v-if="counter===0" :counter="counter"  @next="handelCangeComponent" @headData="headData"/>   
        <Information  v-if="counter===1" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent" @infoData="infoData"/>   
        <SkillsLanguages  v-if="counter===2" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent" @hnadelLanguction="hnadelLanguction" @hnadelSkills="hnadelSkills"/>   
        <Edgucation  v-if="counter===3" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent" @handelEdguction="handelEdguction"/>   
        <Experins  v-if="counter===4" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent" @handelExperience="handelExperience"/>   
        <SubmitCv  v-if="counter===5" :counter="counter" @back="handelBackComponent" @next="handelCangeComponent"/>   
    </div>
    <div class="right-cv" >
        <div >
            <CvDisplay 
            :profileData="profileData"
            :informationData="informationData"
            :languages="languages"
            :skillsData="skillsData"
            :edgucation="edgucation"
            :experins="experins"
            />
          
        </div>
        
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
import CvDisplay from "@/components/CvDisplay.vue"
export default{
   components:{
    HeaderPart,
    Experins,
    SkillsLanguages,
    Information,
    Edgucation,
    SubmitCv,
    CvDisplay
   },
   data(){
    return{
        counter:0,
        profileData:[],
        informationData:[],
        languages:[],
        skillsData:[],
        edgucation:[],
        experins:[]
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
    },
    headData(headData){
         this.profileData=headData
    },
    infoData(infoData){
         this.informationData=infoData
    },
    hnadelLanguction(hnadelLanguction){
        this.languages=hnadelLanguction
    },
    hnadelSkills(hnadelSkills){
        this.skillsData=hnadelSkills
    },
    handelEdguction(handelEdguction){
        this.edgucation=handelEdguction
    },
    handelExperience(handelExperience){
        this.experins=handelExperience
    }
   },

   mounted(){
    this.AllData = localStorage.getItem('profileInfo')
    console.log(this.AllData);
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
.right-cv > div{
    display: flex;
    height: 100%;
    justify-content: center;
    
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
@media print {
    :root{
        --margin-side:5px 0px;
        --font-12:16px;
    }
    .contenar{
        display: block;
        margin: 0;
    }
    .contenar >div{
        flex: 1;
    background-color: var(--item-color);
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    overflow: auto;
    }
    .left-info{
            display: none;
        }
        .right-cv{
            height: 100%;
            width: 100%;
        }
        .cv-header .image{
            width: 100px;
            height: 100px;
        }
        h6{
            font-size:16px ;
        }
        h5{
            font-size:18px ;
        }
        .title h1{
 
          font-size: 35px;

        }
     
      }
      @media screen and (max-width: 1200px) {
        .contenar{
        margin: 5vh 2vw;
       }
      }
      @media screen and (max-width: 950px) {
        .contenar{
        height: 160vh;
        flex-direction: column;
       }
      }
      @media screen and (max-width: 400px) {
        .contenar{
        height: 120vh;
        flex-direction: column;
       }
       .custum-file-upload{
        height: 80px;
        width: 80px;
       }
       
 
   .input-image .image img {
      height: 74px;
      width: 72px;
      }

    .cv-loop img{
    width: 200px!important;
    }
    }
</style>
