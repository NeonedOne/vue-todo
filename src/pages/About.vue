<template>
    <html lang="">
		<div class="body">	
			<navbar/>
            <section><img src="@/assets/Lenin_Cover.jpg" alt=""  class="BG_Picture"></section>
			<div class="content">
      <div>
        <h1 class="title">TORFL</h1>
        <p><strong>Test of English as a Foreign Language</strong> is based on a unified certification system for determining the level of proficiency in practical Russian and is built taking into account the purposes of its use, skills and abilities in the use of language means for the implementation of certain tactics of speech behavior in the main types of speech activity.</p>
        <p class="attention">ATTENTION: OUR SITE DOES NOT ISSUE ANY CERTIFICATES</p>
        <p>Testing is divided into 6 levels of general proficiency in Russian:</p>
        <hr>
        <teleport/>
        <hr>
      </div>
      <div class="abouttitles">
      <div>
        <p class="title" id="A1">Elementary / Breakthrough level (ТЭУ&nbsp;/&nbsp;A1)</p>
        <p>Upon successful completion of the elementary level test, an appropriate certificate is issued confirming general knowledge of Russian as a foreign language and attests that the candidate is capable of satisfying elementary communicative needs in a limited number of domestic situations, Socio-cultural and educational spheres of communication. The certificate attests to the existence of the necessary and sufficient basis for further study of the Russian language.</p>
      </div>
      <div>
        <p class="title" id="A2">Basic / Waystage level (ТБУ&nbsp;/&nbsp;A2) and basic level for russian citizenship</p>
        <p>Upon successful completion of the basic level test, a certificate is issued confirming the general knowledge of Russian as a foreign language and testifying that the candidate is capable of satisfying the basic (basic) communication needs in the social sphereDomestic, sociocultural and educational spheres of communication. The certificate attests to the existence of the necessary and sufficient basis for further study of the Russian language. A certificate of a basic level of proficiency in Russian <strong class="underline">is required for the acquisition of citizenship of the Russian Federation</strong>.</p>
      </div>
      <div>
        <p class="title" id="B1">First certification / Threshold level (ТРКИ&#8209;I&nbsp;/&nbsp;B1)</p>
        <p>Upon successful completion of the first-level test, a certificate is issued confirming the general knowledge of Russian as a foreign language and the candidate’s ability to meet the basic communication needs in the social, social and cultural spheres of communication. This level provides the necessary communication in a linguistic environment (work, study, rest). A certificate of first-level knowledge of Russian <strong class="underline">is required for foreign applicants to study at a Russian university</strong>.</p>
      </div>
      <div>
        <p class="title" id="B2">Second certification / Vantage level (ТРКИ&#8209;II&nbsp;/&nbsp;B2)</p>
        <p>Upon successful completion of the second-level test, a certificate is issued confirming the general knowledge of Russian as a foreign language and attesting to a sufficiently high level of communication competence in all spheres of communication. This level allows the candidate to conduct professional activity in Russian as a specialist of humanitarian, engineering, and natural science. A second-level Russian language certificate <strong class="underline">is required for a bachelor’s and/or master’s degree from a Russian university</strong>.</p>
      </div>
      <div>
        <p class="title" id="C1">Third certification / Effective Operational Proficiency level (ТРКИ&#8209;III&nbsp;/&nbsp;C1)</p>
        <p>Upon successful completion of the third-level test, a certificate is issued confirming the general knowledge of Russian as a foreign language and attesting to the high level of communication competence in all spheres of communication. This level allows the candidate to conduct professional activity in Russian as a specialist-philologist, translator, editor, journalist, diplomat; to conduct professional activity in the Russian-speaking collective. A third-level Russian language certificate <strong class="underline">is required for a Bachelor’s, Specialist, Master’s and Candidate’s degree in the above-mentioned specialties</strong>.</p>
      </div>
      <div>
        <p class="title" id="C2">Fourth certification / Good user (ТРКИ&#8209;IV&nbsp;/&nbsp;C2)</p>
        <p>Upon successful completion of the Level 4 test, a certificate is issued confirming general knowledge of Russian as a foreign language and attesting to a high level of proficiency in Russian, which is close to the level of a native speaker. A fourth-level Russian language certificate <strong class="underline">is required for a specialist’s and a master’s degree in Russian philology, a candidate of philology and a candidate of pedagogical sciences for teaching and scientific studiesResearch activities in the Russian language</strong>.</p>
      </div>
      </div>
    </div>
    </div>
    <footervue />
	</html>
</template>

<script>
import navbar from "@/components/navbar.vue"
import teleport from "@/components/teleport.vue";
import footervue from "@/components/footer.vue";

export default {
  name: 'About',
  props: {
    msg: String
  },
  components: {
	navbar,
  teleport,
  footervue,
  }
}

</script>
<style>
  .abouttitles .title{
      margin: 20px 0 10px;
      padding: 60px 0 10px;
  }
</style>