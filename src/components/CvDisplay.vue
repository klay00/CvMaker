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
            <h6>E-mail : {{informationData.email  }}</h6>
            <h6>phone : {{informationData.phone  }}</h6>
            <h6>Address : {{informationData.address  }}</h6>
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
    height: 20%;
    border-bottom:2px black solid ;
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

 }
 .title p{
    color:  gray;
 }
 .cv-information{
    display: flex;
    height: 20%;
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
    height: 50%;
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
 }
</style>