<template>
    
    <div class="left-info">
        <h1>Information</h1>
        <form @submit="handelSubmit" class="left-info">
           <div class="flex-inputs">
            <div class="inputs">
               <label for="Address">Address</label>
               <input   type="text" id="Address" placeholder="EX : Dora, Baghdad "> 
            </div>
            <div class="inputs">
               <label for="email">E-Mail Address</label>
               <input   type="email" id="email" placeholder="EX : exmaple@example.com"> 
            </div>
            <div class="inputs">
               <label for="Phone">Phone</label>
               <input   type="number" id="Phone" placeholder="EX : 07812345678"> 
            </div>
            <div class="inputs">
               <label for="Profile">Profile</label>
               <textarea    id="Profile" cols="30" rows="4" placeholder="simple pargraph about you"></textarea> 
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
      methods:{
        handelSubmit(e){
            e.preventDefault();
            this.$emit('next')
        }
    }
  }
  </script>
  
  <style>
  
  </style>