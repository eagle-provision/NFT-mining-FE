<template>
  <div id="app" class="text-dark"> 
    <Header />
    <Section/>
    <Babes/>
    <Story/>
    <Club/>
    <Charity/>
    <Boobmap/>
    <Faq/>
    <Team/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Section from "./layout/Section.vue";
import Footer from"./layout/Footer.vue"
import Babes from "./layout/Babes.vue";
import Story from "./layout/Story.vue";
import Club from "./layout/Club.vue";
import Charity from "./layout/Charity.vue";
import Boobmap from "./layout/Boobmap.vue";
import Faq from "./layout/Faq.vue";
import Team from "./layout/Team.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Section,
    Babes,
    Story,
    Club,
    Charity,
    Boobmap,
    Faq,
    Team,
  },
};
</script>
