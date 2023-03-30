<template>
  <div class="app-content container center-layout mt-2">
      <div class="content-wrapper">
        <div class="content-body">
            <!-- start -->
            <section id="horizontal-form-layouts">

                <div class="row">
                    <div class="col-md-12">
                        <div class="card border-blue-grey border-lighten-4 box-shadow-1">
                            <div class="card-header">
                                <h4 class="card-title">GIVE TO UG</h4> 
                            </div>
                            <div class="card-content collpase show">
                                <div class="card-body">
                                 
                                    <!-- success -->
                                    <div v-if="success">
                                         <img src="assets/images/success.png" alt="banner" style="max-height:200px;display:block;margin:auto">  
                                         <h3 class="text-center">CONGRATULATIONS.. YOUR DONATION HAS GONE THOURGH SUCCESSFULLY...</h3> 
                                         <h4 class="text-center">Your DETAILS BELOW</h4>
                                         <br>
                                        <div class="table-responsive" style="border:1px solid #ddd;">
                                          <table class="table table-borderless">
                                              
                                                <tr>
                                                    <td>FULL NAME</td>
                                                    <td>{{formdata.title}} {{formdata.surname}} {{formdata.othernames}}</td>
                                                </tr>
                                                <tr>
                                                    <td>EMAIL</td>
                                                    <td>{{formdata.email}}</td>
                                                </tr>
                                                <tr>
                                                    <td>PHONE NUMBER</td>
                                                    <td>{{formdata.phone}}</td>
                                                </tr>
                                                <tr>
                                                    <td>PAYMENT REFERENCE</td>
                                                    <td>{{formdata.clientref}}</td>
                                                </tr>
                                                <tr>
                                                    <td>AMOUNT PAID</td>
                                                    <td>{{formdata.amount}}</td>
                                                </tr>
                                         </table>
                                         
                                        </div> 
                                    </div>
                                    <!-- end success -->


                                     <!-- error -->
                                    <div v-if="error">
                                         <img src="assets/images/error.jpg" alt="banner" style="max-height:100px;display:block;margin:auto">  
                                        <br>
                                         <h3 class="text-center">OOPS.. SORRY, YOUR DONATION WAS NOT SUCCESSFUL...PLEASE TRY AGAIN</h3> 
                                         <h4 class="text-center">Your Details</h4>
                                         <br>
                                        <div class="table-responsive" style="border:1px solid #ddd;">
                                         <table class="table table-borderless">
                                               <!-- <tr>
                                                    <td>EVENT CODE</td>
                                                    <td>{{formdata.id}}</td>
                                                </tr> -->
                                                <tr>
                                                    <td>FULL NAME</td>
                                                    <td>{{formdata.title}} {{formdata.surname}} {{formdata.othernames}}</td>
                                                </tr>
                                                <tr>
                                                    <td>EMAIL</td>
                                                    <td>{{formdata.email}}</td>
                                                </tr>
                                                <tr>
                                                    <td>PHONE NUMBER</td>
                                                    <td>{{formdata.phone}}</td>
                                                </tr>
                                                <tr>
                                                    <td>PAYMENT REFERENCE</td>
                                                    <td>{{formdata.clientref}}</td>
                                                </tr>
                                                <tr>
                                                    <td>AMOUNT DONATING</td>
                                                    <td>{{formdata.amount}}</td>
                                                </tr>
                                         </table>

                                         <button class="btn btn-lg btn-ug offset-1" style="display:block:margin:auto;" @click="payAgain">TRY AGAIN</button>&nbsp;&nbsp;
                                        <button class="btn btn-lg btn-primary" style="display:block:margin:auto;" @click="home">TAKE ME HOME</button>
                                         <br><br>
                                        </div> 
                                    </div>
                                    <!-- end error -->

                                    <!-- pending -->
                                    <div style="margin-bottom:200px" v-if="pending">
                                         <img src="assets/images/pending.gif" alt="banner" style="max-height:100px;display:block;margin:auto">  
                                        <br>
                                         <h3 class="text-center">CHECKING YOUR DONATION STATUS.. PLEASE WAIT</h3> 
                                    </div>
                                    <!-- end pending -->
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Status',
  props: {
    success:{
        type:Boolean,
        default:false
    }, 
     error:{
          type:Boolean,
        default:false
    }, 
    pending:{
         type:Boolean,
        default:true
    },
    formdata:{
        type:Object,
    }
  },
  methods: {
      payAgain(){
          this.$emit('tryagain',true);
      },
      printDetails(){
          this.$emit('printdetails',true);
      },
      home(){
          this.$emit('home',true);
      },
        
  },
}
</script>
<style scoped>

</style>
