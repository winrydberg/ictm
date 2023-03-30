<template>
<div>
   <Top/>   
   <!-- content starts here -->
   <Content />
  <Footer/>
</div>
</template>

<script>
import Top from './components/Top.vue';
import Footer from './components/Footer.vue';
import Content from './Content.vue';
// import Status from './Status.vue';
export default {
  name: 'Mainform',
  components:{
      Top,
     Footer,
     Content,
    // Status
  },
  data() {
      return {
         
      }
  },
  methods: {
  },
  mounted() {

  },
}
</script>
<style scoped>

</style>
