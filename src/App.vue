<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view><Home/></router-view>
  </div>
</template>

<script>
// закомменть это
// import HelloWorld from './components/HelloWorld.vue'
import Home from "@/pages/Home.vue"

export default {
  name: 'App',
  components: {
      // HelloWorld
      Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

#app {
   margin: 0;
   padding: 0;
   font-family: 'Ubuntu', sans-serif;
   background-attachment: fixed;



  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
}
html{
	background-color: #131313;
}
.body{
	background-color: transparent;
	margin: 0px;
}
.BG_Picture{
	position:relative;
	width: 100%;
	height: 100%;
	background-size: cover;
}
.content{
    margin: 25px 6em 20px;
}
.title{
  font-size: 2em;
  margin-top: 25px;
  margin: 45px 0 20px;
  color:white;
  font-weight: 700;
}
p{
  color:white;
  font-size: 1em;
  margin: 0 0em 20px;
}
.faded{
  color: #CCCCCC;
}
strong.underline{
  text-decoration: underline;
  text-decoration-color:#b30000;
}
.attention{
  color: #b30000;
  font-weight: 700;
}
hr{
  border-top: 1px solid #b30000;
}

@media (max-width: 768px)
{
  .content{
    margin: 45px 2em 20px;
  }
  /* .title{
    margin: 45px 1em 20px;
  }
  p{
    margin: 0 2em 20px;
  } */
}
</style>
