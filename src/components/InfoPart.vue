<template>
    
    <div class="left-info">
        <h1>Information</h1>
        <form @submit="handelSubmit" class="left-info">
           <div class="flex-inputs">
            <div class="inputs">
               <label for="Address">Address</label>
               <input  v-model="address" type="text" id="Address" placeholder="EX : Dora, Baghdad "> 
            </div>
            <div class="inputs">
               <label for="email">E-Mail Address</label>
               <input v-model="email"  type="email" id="email" placeholder="EX : exmaple@example.com"> 
            </div>
            <div class="inputs">
               <label for="Phone">Phone</label>
               <input  v-model="phone" type="number" id="Phone" placeholder="EX : 07812345678"> 
            </div>
            <div class="inputs">
               <label for="Profile">Profile</label>
               <textarea  v-model="profile"  id="Profile" cols="30" rows="4" placeholder="simple pargraph about you"></textarea> 
            </div>
           </div>
           <div class="buttnes ">
            <button class=" btn-back" v-if="counter > 0" @click="$emit('back')"> Back</button>
           <button class="btn" type="submit" v-if="counter < 3" >Next</button>
           </div>
       </form>
        </div>
  </template>
  
  <script>
  export default {
      props:['counter'],
      data(){
         return{
            informationData:[],
            profile:'',
            phone:'',
            email:'',
            address:'',
         }
      },
      methods:{
        handelSubmit(e){
            e.preventDefault();
            this.informationData=({
              profile: this.profile,
              phone:this.phone,
              email:this.email,
              address:this.address
            })
            this.$emit('infoData', this.informationData)
            this.$emit('next')
        }
    }
  }
  </script>
  
  <style>
  
  </style>