<template>
  
  <div class="left-info">
      <h1>Personal information</h1>
   
      <form @submit="handelSubmit" class="left-info">
           <div class="flex-inputs">
            <div class="inputs">
               <label for="name">Name</label>
               <input   type="text" id="name" placeholder="EX : Hussein alaa"> 
            </div>
            <div class="inputs">
               <label for="Speciality">Speciality</label>
               <input   type="text" id="Speciality" placeholder="EX : Frontend / backend"> 
            </div>
           </div>
           <div class="input-image">
            <label class="custum-file-upload" for="file">
              <div class="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
             </div>
             <div class="text">
             <span>Click to upload image</span>
               </div>
                  <input   type="file" @change="handleFileChange" id="file">
               </label>
               <div class="image">
                 
                <img v-if="selectedFile" :src="imageUrl" alt="">
                <img v-else src="../assets/avatar.png" alt="">
               </div>
           </div>
           <button class="btn" type="submit" v-if="counter < 3" >Next</button>
       </form>
            
     </div>
</template>

<script>
export default {
    props:['counter'],
    data(){
       return{
        selectedFile:''
       }
    },
    methods:{
        handelSubmit(e){
            e.preventDefault();
            this.$emit('next')
        },
        handleFileChange(event) {
        this.selectedFile = event.target.files[0];
    },
    },
    computed: {
    imageUrl() {
      return this.selectedFile ? URL.createObjectURL(this.selectedFile) : '';
    },
  },
}
</script>

<style>
h1{
    color: var(--text-lighti-color);
    margin-left: 20px;
}
form{
    padding: 20px;
}
input,select{
  background-color: var(--text-color);
  border: none;
  height: 40px;
  border-radius: 10px;
  padding-left:10px ;
  color: white;
  width: 100%;
  margin: 5px;
}
textarea{
    background-color: var(--text-color);
  border: none;
  border-radius: 10px;
  padding-left:10px ;
  color: white;
  width: 100%;
  margin: 5px;
}
::placeholder{
    color:var(--text-lighti-color);
}
label{
    color: var(--text-lighti-color);
    margin: 10px;

}
.flex-inputs{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.input-image{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.input-image .image img{
    height: 150px;
    width: 150px;
    border-radius: 50%; ;
}
.custum-file-upload {
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: var(--text-lighti-color);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: var(--text-lighti-color);
}

.custum-file-upload input {
  display: none;
}
</style>