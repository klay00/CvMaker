<template>
  <div class="a4-display">
    <div v-show="profileData.fullNmae" class="cv-header">
        <div class="title">
            <h1>{{ profileData.fullNmae }}</h1>
            <p>{{  profileData.speciality }}</p>
        </div>
        <div class="image">
            <img :src="profileData.image" alt="">
        </div>
    </div>
    <div class="cv-information" v-if="informationData.email">
        <div class="left">
            <h6>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                {{informationData.email  }}</h6>
            <h6>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                {{informationData.phone  }}</h6>
            <h6>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                {{informationData.address  }}</h6>
        </div>
        <div class="right">
            <p>{{ informationData.profile }}</p>
        </div>
    </div>
    <div class="buttom-side" >
        <div class="Skils-lang" >
            <div class="edgucation" v-if="edgucation.length">
                <h5>Education</h5>
                <div v-for="edu in edgucation" :key="edu.end">
                    <h6>{{ edu.specialization }}</h6>
                    <h6>{{ edu.degree }} of {{ edu.specialization }}  </h6>
                    <h6>from {{ edu.unversty }} </h6>
                <p><span>{{ edu.start }}</span> / <span>{{ edu.end }}</span></p>
                </div>
            </div>
            <div class="skils" v-if="skillsData.length">
                <h5>Skills</h5>
                <ul>
                    <li v-for="skill in skillsData" :key="skill">{{ skill }}</li>
                </ul>
            </div>
            <div class="lang" v-if="languages.length">
                <h5>languages</h5>
                <ul>
                    <li v-for="lang in languages" :key="lang">{{ lang }}</li>
                </ul>
            </div>
            
        </div>
        <div class="experins" v-if="experins.length">
            <h5>Experins</h5>
            <div v-for="exp in experins" :key="exp.end" >
                <h6>{{ exp.company }}</h6>
                <h6>{{ exp.position }}</h6>
                <p><span>{{ exp.start }}</span> / <span>{{ exp.end }}</span></p>
                <p>{{ exp.details }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
  "edgucation",
  "profileData",
  "informationData",
  "languages",
  "skillsData",
  "experins",
  ]
}
</script>

<style>

 .a4-display{
     margin: 10px; 
     background-color: white;
     aspect-ratio: 1/1.414;
 }
 .cv-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15%;
    border-bottom:2px var(--text-color) solid ;
    margin: var(--margin-side);
 }
 .cv-header .image{
    height: 50px;
    width: 50px;
    
 }
 .cv-header .image img{
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 50%;
 }
 .title h1{
    color: black;
    margin: 0%;
    font-size: 18px;

 }
 .title p{
    color:  gray;
    font-size: var(--font-12)
 }
 .cv-information{
    display: flex;
    height: 15%;
    margin: var(--margin-side);
 }
 .cv-information .left{
   flex: 1.5;
   font-size: 12px;
 }
 .cv-information .right{
   flex: 2;
   color: gray;
   font-size: var(--font-12);
 }
 .buttom-side{
    display: flex;
    gap: 20px;
    margin: var(--margin-side);
    height: 60%;
 }
 .Skils-lang{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }
 li,span{
    font-size: var(--font-12);
 }
 .experins{
    display: flex;
    flex-direction: column;
    gap: 20px;
 }
 h5{
    margin-bottom: 10px;
    color: var(--text-color);
 }
</style>