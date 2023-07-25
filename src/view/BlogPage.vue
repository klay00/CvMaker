<template>
    <div class="blog">
        <div class="space">
            <h1>Welcome to CV Maker service</h1>
            <h3>Create your own CV in a few quick and simple steps.</h3>
        </div>
        <div>
            <router-link to="HomePage">
                <button class="btn">Get Started</button>
            </router-link>
            
        </div>
    </div>
    <div class="cv-loop">
        <div class="uploop" v-for="loop in loops" :key="loop">
            <img src="../assets/cv1.png" alt="">
            <img src="../assets/cv2.jpg" alt="">
            <img src="../assets/cv3.jpg" alt="">
            <img src="../assets/cv4.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
   data(){
    return{
        loops:500
    }
   }
}
</script>

<style>
.blog{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}
.blog h1{
    margin: 0;
    font-size: 50px;
}
.blog h3{
    color: var(--text-color);
}
.space{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 10px;
}
.cv-loop{
    position: fixed;
    top: 0;
    z-index: -1;
     animation: looptop 60s infinite linear ;
    position: fixed;
    top: 0;
    z-index: -1;
}
.cv-loop img{
    width: 300px;
}
.uploop{
    display: flex;
    flex-direction: column;
    gap: 10px;

}

@keyframes looptop {
    0%{
        top: 0;
    }
    100%{
        top: -500%;
    }
}
</style>