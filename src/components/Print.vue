<template>
<div style="background:white;height:100vh">
  <div id="printout" style="width:600px;margin:auto;text-transform:uppercase;width:800px;border:1px solid #ddd;padding:20px">
         
            <img src="https://sts.ug.edu.gh/apps/alumnirelations/assets/images/icon.png" alt="UG logo" style="max-height:200px;display:block;margin:auto">
            <h3 style="text-align:center;font-weight:bold">UG@70 ALUMNI HOMECOMING</h3>
            <p style="text-transform:uppercase">EVENT CODE : {{formdata.id}}</p>
            <p style="text-transform:uppercase">FULL NAME : {{formdata.title}} {{formdata.surname}} {{formdata.firstname}} {{formdata.othernames}}</p>      
            <p style="text-transform:uppercase">EMAIL : {{formdata.email}}</p>
            <p style="text-transform:uppercase">PHONE NUMBER : {{formdata.phone}}</p>
            <p style="text-transform:uppercase">PAYMENT REFERENCE : {{formdata.clientref}}</p>
            <p style="text-transform:uppercase">TICKET TYPE : {{formdata.ticket}} ( {{pickDescription(formdata.ticket,formdata.daypasstype)}} )</p>
            <img :src="qrcode" alt="" v-if="qrcode" style="max-height:200px;display:block;margin:auto">
        </div>
</div>
</template>

<script>
export default {
  name: 'Print',
   data() {
      return {
          success:false,
          error:false,
          pending:true,
          qrcode:null,
          logo:'assets/images/icon.png',
          formdata:{
            id:'',
            title:'',
            surname:'',
            firstname:'',
            othernames:'',
            email:'',
            phone:'',
            clientref:'',
            ticket:'',
            description:''
          },
          feename:'UG@70 Homecoming',
          request_from:'alumnirelation',
      }
   },
  methods: {

       pickDescription:function(tickettype,daypasstype=null){
          let desc = '';
          switch (tickettype) {
              case 'FAMILY RATE':
                  desc = 'FAMILY RATE rooms are double occupancy(for adults) plus 3 in a room(for 3 children under 15).';
              break;
              case 'V.I.P':
                  desc = 'V.I.P rooms are single occupancy en-suite.';
              break;
             case 'EXECUTIVE':
                  desc = 'Executive rooms are single occupancy with shared facility.';
             break;
             case 'STANDARD':
                  desc = 'Standard rooms are two occupants in a room with shared facility.';
             break;
             case 'B. PACK':
                  desc = 'B. PACK rooms are four occupants in a room with shared facility.';
             break;
              case 'DAY PASS':
                  desc = daypasstype==null ? '' : daypasstype;
             break;
              default:
            
                  break;
          }
          return desc;
        },
     
      pickTicketParts(ticket){
         return this.itseconfig.pickDescription(ticket);
        
      },
       pickUserDetails(param){
          // var _this = this;
           this.$http.get(this.itseconfig.baseurl+'/userinfo'+'?ref='+param.ref+'&email='+param.email).then(res=>{
               var rp = res.data.status;
               if(rp==='success'){
                this.formdata = res.data.user;
                this.qrcode = res.data.qrcode;
               }else{
                   this.$router.push('/');
               }
            }).catch(()=>{
                //setTimeout(function(){_this.pickUserDetails(param)},10000);
            });
      },
  },
  mounted() {
       if(this.$route.query.ref!==undefined && this.$route.query.email!==undefined){
           this.pickUserDetails(this.$route.query);
       }else{
            this.$router.push('/');
       }
  },
  
}
</script>
<style scoped>

</style>
