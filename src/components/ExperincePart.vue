<template>
    
    <div class="left-info">
        <h1>experins</h1>
        <div class="left-info">
          <form @submit="handelExperins">
                <div class="inputs">
                   <label for="Company">Company Name</label>
                   <input  v-model="company"  type="text" id="Company" placeholder="EX : google facebok  "> 
                </div>
                <div class="inputs">
                   <label for="position">Work position</label>
                   <input v-model="position"  type="text" id="position" placeholder="EX : Frontend developer "> 
                </div>
                <div class="inputs">
                   <label for="Start">Start in</label>
                   <input v-model="start" type="date" id="Start"> 
                </div>
                <div class="inputs">
                   <label for="End">End in</label>
                   <input v-model="end" type="date" id="End"> 
                </div>   
                <div class="inputs">
                   <label for="Details">Details</label>
                   <textarea v-model="details" id="Details" cols="30" rows="10" placeholder="Write simple Details for your work"></textarea>
                </div> 
                <button class=" btn" type="submit"> Add experins</button>            
               <div v-if="experins !==''">
                  <div  class="drowp-items"  v-for="edg in experins" :key="edg.start">
                    <span class="drowp-item" >Company : {{ edg.company }}</span>
                    <span class="drowp-item">position :{{ edg.position }}</span>
                    <span class="drowp-item">Details :{{ edg.details }}</span>
                    <span class="drowp-item">Start in : {{ edg.start }}</span>
                    <span class="drowp-item">End in : {{ edg.end }}</span>
                </div>
               </div>
            </form>
        </div>
  <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
            <button class="btn" v-if="counter < 5" @click="handelChngeComponent">Next</button>
        </div>
        
        </div>
  </template>
  
  <script>
 export default {
    props:['counter'],
    data(){
        return{
          experins:[],
            company:'',
            position:'',
            details:'',
            start:'',
            end:'',
        }
    },
    methods:{
      handelExperins(e){
           e.preventDefault();
           if (this.experins !== []) {
               this.experins.push({
                company: this.company,
                position: this.position,
                details: this.details,
               start: this.start,
              end: this.end
              });

           this.company='',
           this.position='',
           this.details='',
           this.start='',
           this.end='',
           console.log(this.experins);
          }
        },
        handelChngeComponent(){
         if(this.experins.length){
            this.$emit('handelExperience',this.experins)
            this.$emit('next')
         }
        }
    }
}
  </script>