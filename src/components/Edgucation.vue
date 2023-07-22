<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="left-info">
        <h1>Edgucation</h1>
        <div class="left-info">
             <form @submit="handelEdguction">
                <div class="inputs">
                   <label for="Nniversity">University / school Name</label>
                   <input v-model="unversty"  type="text" id="Nniversity" placeholder="EX : Mustansrya university "> 
                </div>
                <div class="inputs">
                   <label for="specialization">specialization</label>
                   <input v-model="specialization"  type="text" id="specialization" placeholder="EX : Computer engineering "> 
                </div>
                <div class="inputs">
                   <label for="Degree" >Degree</label>
                   <select id="Degree" v-model="degree">
                    <option value="school degree">School degree</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctoral degree">Doctoral degree</option>
                   </select>
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
                  <button class=" btn" type="submit" > Add Degree</button>  
                </div>
               
               <div v-if="edguction !==''">
                  <div  class="drowp-items"  v-for="edg in edguction" :key="edg.start">
                    <span class="drowp-item" >University : {{ edg.unversty }}</span>
                    <span class="drowp-item">specialization :{{ edg.specialization }}</span>
                    <span class="drowp-item">Degerr : {{ edg.degree }}</span>
                    <span class="drowp-item">Start in : {{ edg.start }}</span>
                    <span class="drowp-item">End in : {{ edg.end }}</span>
                </div>
               </div>
            </form>
         <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
            <button class="btn" v-if="counter < 4" @click="$emit('next')">Next</button>
        </div> 
        </div>
        
        </div>
</template>

<script>
export default {
    props:['counter'],
    data(){
        return{
            edguction:[],
            unversty:'',
            specialization:'',
            degree:'',
            start:'',
            end:'',


        }
    },
    methods:{
        handelEdguction(e){
           e.preventDefault();
           if (this.edguction !== '') {
               this.edguction.push({
               unversty: this.unversty,
               specialization: this.specialization,
               degree: this.degree,
               start: this.start,
              end: this.end
              });

           this.unversty='',
           this.specialization='',
           this.degree='',
           this.start='',
           this.end='',
           console.log(this.edguction);
          }
        }
    }
}
</script>

<style>

</style>