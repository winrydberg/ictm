<template>
<div>
   <Top/>
   <Status :success="success" :error="error" :pending="pending" :formdata="formdata" @tryagain="tryAgain" @printdetails="PrintDetails" @home="takeMeHome"/>
  <!-- <Footer/> -->
        <!-- <div id="printout" style="width:600px;margin:auto;display:none;text-transform:uppercase">
            <img :src="logo" alt="UG logo" style="max-height:200px;display:block;margin:auto"/>
            <h3 style="text-align:center">UG@70 ALUMNI HOMECOMING</h3>
            <p style="text-transform:uppercase">EVENT CODE : {{formdata.id}}</p>
            <p style="text-transform:uppercase">FULL NAME : {{formdata.title}} {{formdata.surname}} {{formdata.firstname}} {{formdata.othernames}}</p>      
            <p style="text-transform:uppercase">EMAIL : {{formdata.email}}</p>
            <p style="text-transform:uppercase">PHONE NUMBER : {{formdata.phone}}</p>
            <p style="text-transform:uppercase">PAYMENT REFERENCE : {{formdata.clientref}}</p>
            <p style="text-transform:uppercase">TICKET TYPE : {{formdata.ticket}} ( {{pickDescription(formdata.ticket,formdata.daypasstype)}})</p>
            <img :src="qrcode" alt="" v-if="qrcode" style="max-height:200px;display:block;margin:auto"/>
        </div> -->
</div>
</template> 

<script>
import Top from './components/Top.vue';
//import Footer from './components/Footer.vue';
import Status from './Status.vue';
export default {
  name: 'Finish',
  components:{
      Top,
     //Footer,
     Status
  },

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
      }
  },
  methods: {

   
     saveAndPay(){
        //   this.toggledisabled = true;
        //   var _this = this;
        //     _this.formdata['feename'] = _this.feename;
        //     this.$http.post(this.itseconfig.baseurl+'/saveinformation',this.formdata).then(res=>{
        //        //this.toggledisabled = false;
            
        //         _this.clientref = res.data.id;
        //         _this.formdata['clientref'] = res.data.clientref;
        //         _this.formdata['amount'] = res.data.amount;
        //         _this.formdata['feename'] = _this.feename;
        //         _this.formdata['request_from'] = _this.request_from;
        //         localStorage.setItem('reguser',JSON.stringify(this.formdata));
        //         this.$swal('Redirecting to payment portal... Please hang on');
        //        this.$http.post(this.itseconfig.payment+'/checkout',this.formdata).then(res=>{
        //            if(res.data){  
        //                window.location.href=res.data;
        //            }
        //        }).catch();
        //    }).catch(()=>{
        //        this.toggledisabled = false;
        //       // console.log('errror');
        //    });
      },
      checkPaymentStatus(token){
        //    var _this = this;
        //    this.$http.get(this.itseconfig.baseurl+'/checkpaystatus'+'?token='+token).then(res=>{
        //        var rp = res.data.status;
        //        if(rp==='success'){
        //           this.success = true;
        //           this.error = this.pending = false;
        //           if(res.data.user){
        //               this.formdata = res.data.user;
        //           }
        //        }else if(rp==='pending'){
        //           this.pending = true;
        //           this.success = this.error = false;
        //           setTimeout(function(){_this.checkPaymentStatus(token)},10000);
        //        }else{
        //             this.error = true;
        //             this.success = this.pending = false;
        //              if(res.data.user){
        //               this.formdata = res.data.user;
        //           }
        //        }
        //     }).catch(()=>{
        //         setTimeout(function(){_this.checkPaymentStatus(token)},10000);
        //     });
      },

      tryAgain(){
           this.$router.push('/');
        //   if(localStorage.getItem('reguser')){
        //    if(localStorage.getItem('reguser') !== 'undefined' || localStorage.getItem('reguser')!==null){
        //         this.formdata = JSON.parse(localStorage.getItem('reguser'));
        //         this.saveAndPay();
        //     }else{
        //         this.$router.push('/');
        //     }
        //   }else{
        //        this.$router.push('/');
        //   }
      },

      takeMeHome(){
          this.$router.push('/');
      },
      PrintDetails(){
        
        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        mywindow.document.write('<html><head><title>Print out</title>');
        mywindow.document.write('<style type="text/css">@media print { .headback{background:#ddd;} }</style>');
        mywindow.document.write('</head><body>');
        mywindow.document.write(document.getElementById('printout').innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
         mywindow.close();
  return true;     
      }
  },
  mounted() {
      if(localStorage.getItem('reguser') !== 'undefined' || localStorage.getItem('reguser')!==null){
       this.formdata = JSON.parse(localStorage.getItem('reguser'));
      }
      //console.log(this.$route.query.token!==undefined);
        if(this.$route.query.token!==undefined){
           this.checkPaymentStatus(this.$route.query.token);
        }else{
           // this.$router.push('/');
        }
 },
}
</script>
<style scoped>

</style>
