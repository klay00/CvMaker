<template>
    
    <div class="left-info">
        <h1>skils languctios</h1>
        <div class="left-info">
             <form class="inputs" @submit="handleSkills">
              <label for="Skills">Skills</label>
               <input v-model="newSkill"  type="text" id="Skills" placeholder="EX : React / Vue"> 
               <button class=" btn" > Add Skills</button>
               <div class="drowp-items" v-if="Languction !==''">
                  <div class="drowp-item" v-for="skill in skills" :key="skill">{{ skill }}</div>
               </div>
            </form>
             <form class="inputs" @submit="handelLanguction">
               <label for="languctios">languctios</label>
               <input v-model="newLanguction"  type="text" id="languctios" placeholder="EX : English "> 
               <button class=" btn" > Add languctios</button>
               <div class="drowp-items" v-if="Languction !==''" >
                  <div class="drowp-item" v-for="Lang in Languction" :key="Lang">{{ Lang }}</div>
               </div>
            </form>
         <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
            <button class="btn" v-if="counter < 3" @click="handelNextComponent">Next</button>
        </div> 
        </div>
        
        
        </div>
  </template>
  
  <script>
  export default {
    props:['counter'],
    data(){
      return{
          skills:[],
          newSkill:'',
          Languction:[],
          newLanguction:'',
      }
    },
    methods:{
      handleSkills(e) {
      e.preventDefault();
      if (this.newSkill.trim() !== '') {
        this.skills.push(this.newSkill.trim());
        this.newSkill = ''; 
       }
      },
      
      handelLanguction(e) {
      e.preventDefault();
      if (this.newLanguction.trim() !== '') {
        this.Languction.push(this.newLanguction.trim());
        this.newLanguction = ''; 
       }
      },
      handelNextComponent(){
        if(this.skills.length !==0 && this.Languction.length !== 0) {
          this.$emit('hnadelSkills', this.skills)
          this.$emit('hnadelLanguction', this.Languction)
          this.$emit('next')
        } 
      }
    }
  }
  </script>
  
  <style>
  .drowp-items{
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   margin-top: 5px;
  }
  .drowp-item{
    padding: 10px;
   border-radius:20px ;
   background-color: var(--text-color);
   color: white;
  }
  </style>