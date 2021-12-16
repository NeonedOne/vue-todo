<template>
  <html lang="">
    <div class="body">
      <navbar />
      <section>
        <img src="@/assets/BlackTeacher_Cover.jpg" alt="" class="BG_Picture" />
      </section>
      <div class="content">
        <div>
          <h1 class="title">TRAINING BY VARIANTS</h1>
          <p class="faded">Select and go through one of the variants</p>
          <hr />
          <teleport />
          <hr />
        </div>

        <div>
          <h1 class="testtitle" id="A1">ТЭУ&nbsp;/&nbsp;A1</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
        </div>
        <div>
          <h1 class="testtitle" id="A2">ТБУ&nbsp;/&nbsp;A2</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
        </div>
        <div>
          <h1 class="testtitle" id="B1">ТРКИ&#8209;I&nbsp;/&nbsp;B1</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
          >
        </div>
        <div>
          <h1 class="testtitle" id="B2">ТРКИ&#8209;II&nbsp;/&nbsp;B2</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
        </div>
        <div>
          <h1 class="testtitle" id="C1">ТРКИ&#8209;III&nbsp;/&nbsp;C1</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
        </div>
        <div>
          <h1 class="testtitle" id="C2">ТРКИ&#8209;IV&nbsp;/&nbsp;C2</h1>
          <div class="testcardbox">
            <testcard />
            <testcard />
            <testcard />
          </div>
        </div>
      </div>
	
      <!-- <Profile/> -->
      <!-- <Feedback/>
			<SentData/> -->
    </div>
    <footervue />
  </html>
</template>

<script>
import navbar from "@/components/navbar.vue";
import testcard from "@/components/testcard.vue";
import teleport from "@/components/teleport.vue";
import footervue from "@/components/footer.vue";

// import { component } from 'vue/types/umd'
// import Profile from "@/components/Profile.vue"
// import Feedback from "@/components/Feedback.vue"
// import SentData from "@/components/SentData.vue"

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    navbar,
    testcard,
    teleport,
    footervue,

    // Profile,
    // Feedback,
    // SentData,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.testtitle {
  font-size: 2em;
  margin: 20px 0 10px;
  padding: 60px 0 10px;
  color: white;
  font-weight: 700;
  text-align: center;
}
.testcardbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
