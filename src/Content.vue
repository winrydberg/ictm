<template>
  <div class="app-content container center-layout" style="margin-top:-30px">
      <div class="content-wrapper">
        <div class="content-body">
            <!-- start -->
            <section id="horizontal-form-layouts">

                <div class="row">
                    <div class="col-md-12">
                             
                    </div>
                    <div class="col-md-12">
                        <div class="card border-lighten-4 box-shadow-1" style="border-top:5px solid #B79A64">
                            <div class="card-header">
                                <h4 class="card-title text-center">ICTM2023 Registration </h4> 
                                <hr>
                            </div>

                          

                            <div class="card-content collpase show">

                                <div class="card-body">
                                    
                                    <div class=" text-center">
                                        <h3 class="text-center">47th ICTM World Conference, 13–19 July 2023, Legon, Ghana </h3>
                                        <p>Complete the below form to register and pay for ICTM World Conference, 2023</p>
                                    </div>

                                    <form class="form form-horizontal" @submit.prevent="submitForm">
                                        <div class="form-body">
                                             
                                            <h4 class="form-section">PERSONAL INFORMATION</h4>
                                             <div class="form-group row">
                                                <label class="col-md-3 label-control" for="title">Title <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <select name="title" id="title" class="form-control" v-model="formdata.title" v-validate="'required'" data-vv-as="Title">
                                                        <option value="" disabled selected="selected">Select Title</option>
                                                        <option v-for="(t,index) in titles" :value="t" :key="index">{{t}}</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('title') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="given_name">Given Name <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="text" id="given_name" class="form-control" placeholder="Given Name" name="given_name" v-model="formdata.given_name" v-validate="'required'" data-vv-as="Given Name">
                                                    <span style="color:red;font-style:italic">{{ errors.first('given_name') }}</span>
                                                </div>
                                            </div>

                                             <div class="form-group row">
                                                <label class="col-md-3 label-control" for="othernames">Additional Names</label>
                                                <div class="col-md-6">
                                                    <input type="text" id="additional_names" class="form-control" placeholder="Other Names" name="additional_names" v-model="formdata.additional_names">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="surnames">surnames <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="text" id="surnames" class="form-control" placeholder="surnames" name="surnames" v-model="formdata.surnames" v-validate="'required'" data-vv-as="surnames">
                                                    <span style="color:red;font-style:italic">{{ errors.first('surnames') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="email">E-mail <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="email" id="email" class="form-control" placeholder="E-mail" name="email" v-model="formdata.email" v-validate="'required|email'" data-vv-as="Email" onselectstart="return false" onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false">
                                                    <span style="color:red;font-style:italic">{{ errors.first('email') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="street_address_1">Street Address <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="text" id="street_address_1" class="form-control" placeholder="Street Address" name="street_address_1" v-model="formdata.street_address_1" v-validate="'required'" data-vv-as="Street Address" onselectstart="return false" onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false">
                                                    <span style="color:red;font-style:italic">{{ errors.first('street_address_1') }}</span>
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="city">City <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="text" id="city" class="form-control" placeholder="City" name="city" v-model="formdata.city" v-validate="'required'" data-vv-as="City">
                                                    <span style="color:red;font-style:italic">{{ errors.first('city') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="postal_code">Postal Address</label>
                                                <div class="col-md-6">
                                                    <textarea  rows="5" class="form-control" name="postal_code" v-model="formdata.postal_code"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="onbehalf">Country</label>
                                                <div class="col-md-6">
                                                    <select id="country" class="form-control" name="country" v-model="formdata.country" v-validate="'required'" data-vv-as="Country">
                                                        <option value="" disabled selected="selected">Please select</option>
                                                        <option v-for="(country, index) in countryList" :value="country" :key="index">{{ country }}</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('country') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="iam">I am </label>
                                                <div class="col-md-6">
                                                    <select id="iam" class="form-control" name="iam" v-model="formdata.iam" v-validate="'required'" data-vv-as="I am">
                                                        <option value="" disabled selected="selected">Please select</option>
                                                        <option value="An undergraduate">An undergraduate</option>
                                                        <option value="A graduate student">A graduate student</option>
                                                        <option value="A faculty member">A faculty member</option>
                                                        <option value="A university-affiliate employee">A university-affiliate employee</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('iam') }}</span>
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="affiliations">Academic affiliation, if any (this will be printed on your name badge) </label>
                                                <div class="col-md-6">
                                                    <input type="text" id="affiliations" class="form-control" placeholder="Academic Affilliations" name="affiliations" v-model="formdata.affiliation" >
                                                    <!-- <span style="color:red;font-style:italic">{{ errors.first('affiliations') }}</span> -->
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="presentation_title">Presentation title (leave empty if you are not presenting at the conference) </label>
                                                <div class="col-md-6">
                                                    <input type="text" id="presentation_title" class="form-control" placeholder="Presentation Title" name="presentation_title" v-model="formdata.presentation_title" >
                                                    <!-- <span style="color:red;font-style:italic">{{ errors.first('presentation_title') }}</span> -->
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="dietary">Dietary Restrictions </label>
                                                <div class="col-md-6">
                                                    <select id="dietary" class="form-control" name="dietary" v-model="formdata.dietary" v-validate="'required'" data-vv-as="Dietary Restriction">
                                                        <option value="" disabled selected="selected">Please select</option>
                                                        <option value="No restrictions">No restrictions</option>
                                                        <option value="Vegetarian">Vegetarian</option>
                                                        <option value="Vegan">Vegan</option>
                                                        <option value="Kosher">Kosher</option>
                                                        <option value="Halal">Halal</option>
                                                        <option value="Gluten-free">Gluten-free</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('dietary') }}</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="special_needs">Any other special needs? (e.g., mobility) <span style="color:red">*</span></label>
                                                <div class="col-md-6">
                                                    <input type="text" id="special_needs" class="form-control" placeholder="Special Needs" name="special_needs" v-model="formdata.other_needs" v-validate="'required'" data-vv-as="Special Needs">
                                                    <span style="color:red;font-style:italic">{{ errors.first('special_needs') }}</span>
                                                </div>
                                            </div>

                                            <h4 class="form-section">OTHER INFORMATION</h4>  
                                            
                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="mode_participation">Mode of Participation </label>
                                                <div class="col-md-6">
                                                    <select id="mode_participation" class="form-control" name="mode" v-model="formdata.mode" v-validate="'required'" data-vv-as="Mode">
                                                        <option value="" disabled selected="selected">Please select</option>
                                                        <option value="In Person">In Person</option>
                                                        <option value="Online">Online</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('mode') }}</span>
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="onbehalf">Registration Category </label>
                                                <div class="col-md-6">
                                                    <select id="category" class="form-control" name="category" v-model="formdata.category" v-validate="'required'" data-vv-as="Category">
                                                        <option value="" selected disabled>Please select</option>
                                                        <option value="Ordinary member">Ordinary member</option>
                                                        <option value="Student/Emeritus">Student/Emeritus</option>
                                                        <option value="Non-member">Non-member</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('category') }}</span>
                                                </div>
                                            </div> 
                                            
                                            <div class="form-group row">
                                                <label class="col-md-3 label-control" for="onbehalf">Participation Type </label>
                                                <div class="col-md-6">
                                                    <select id="participation_type" class="form-control" name="participation_type" v-model="formdata.participation_type" v-validate="'required'" data-vv-as="Participation Type">
                                                        <option value="" selected disabled>Please select</option>
                                                        <option value="Single Day Participation">Single Day Participation</option>
                                                        <option value="Two or More Day Participation">Two or More Day Participation</option>
                                                    </select>
                                                    <span style="color:red;font-style:italic">{{ errors.first('participation_type') }}</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="form-actions center">
                                            <!-- <button type="button" class="btn btn-warning mr-1">
                                                <i class="ft-x"></i> Cancel
                                            </button> -->
                                            <button :disabled="loading"  type="submit" class="btn btn-ug btn-md col-md-4 box-shadow-1">
                                               <i v-if="loading" class="fa fa-spinner fa-spin"></i> REGISTER NOW
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end -->
        </div>
      </div>

      <modal name="payment" :adaptive="true" :scrollable="true" height="auto">
       <div class="card">
        <div class="card-header" style="padding:0.8rem 1.5rem">
            <h3 class="card-title">Payment Info</h3>
        </div>
        <div class="card-body" style="padding:5rem 1rem">

            <div class="row" >
                <img class="text-center" style="margin: 0 auto; border-radius: 5px;" src="assets/images/ictm.png" />
            </div>
           
            <p class="text-center" style="margin-bottom: 50px; margin-top: 40px;"><strong>REGISTRATION FEE : </strong> € {{ formdata.amount }}</p>

           <div class="row" style="display:flex; align-items: center; justify-content: center;" >
            <div class="col-md-4">
                <button class="btn btn-block btn-primary btn-md box-shadow-1" @click="processPayment">PROCEED TO PAY</button>
            </div>
            <div class="col-md-4">
                <button @click="cancelModal" class="btn btn-block btn-danger btn-md box-shadow-1" style="margin-left: 10px;">CANCEL</button>
            </div>
            
           </div>
        </div>
    </div>
</modal>
    </div>

</template>

<script>
export default {
  name: 'Content',

  data() {
      return {
            
            formdata:{
                reference: '',
                title:'',
                given_name: '',
                surnames:'',
                additional_names:'',
                email:'',
                street_address_1: '',
                street_address_2: '',
                address:'',
                postal_code: '',
                city:'',
                iam: '',
                country:'',
                affiliation:'',
                presentation_title:'',
                mode_participation:'',
                dietary_restriction:'',
                special_needs: '',
                category:'',
                participation_type:'',
                clientref: '',
                amount: ''
            },
            amounttodonate:'',
            currency:'GHS',
            birdtype: 'latebird',
            loading: false,

            titles:[         
                'MR',
                'MRS',
                'MS',
                'REV',
                'REV SR',
                'DR',
                'PROF',
                'IMAM'
            ],
            countryList : [
                    "Afghanistan",
                    "Albania",
                    "Algeria",
                    "American Samoa",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antarctica",
                    "Antigua and Barbuda",
                    "Argentina",
                    "Armenia",
                    "Aruba",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas (the)",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia (Plurinational State of)",
                    "Bonaire, Sint Eustatius and Saba",
                    "Bosnia and Herzegovina",
                    "Botswana",
                    "Bouvet Island",
                    "Brazil",
                    "British Indian Ocean Territory (the)",
                    "Brunei Darussalam",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burundi",
                    "Cabo Verde",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Cayman Islands (the)",
                    "Central African Republic (the)",
                    "Chad",
                    "Chile",
                    "China",
                    "Christmas Island",
                    "Cocos (Keeling) Islands (the)",
                    "Colombia",
                    "Comoros (the)",
                    "Congo (the Democratic Republic of the)",
                    "Congo (the)",
                    "Cook Islands (the)",
                    "Costa Rica",
                    "Croatia",
                    "Cuba",
                    "Curaçao",
                    "Cyprus",
                    "Czechia",
                    "Côte d'Ivoire",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "Dominican Republic (the)",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Estonia",
                    "Eswatini",
                    "Ethiopia",
                    "Falkland Islands (the) [Malvinas]",
                    "Faroe Islands (the)",
                    "Fiji",
                    "Finland",
                    "France",
                    "French Guiana",
                    "French Polynesia",
                    "French Southern Territories (the)",
                    "Gabon",
                    "Gambia (the)",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Gibraltar",
                    "Greece",
                    "Greenland",
                    "Grenada",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guernsey",
                    "Guinea",
                    "Guinea-Bissau",
                    "Guyana",
                    "Haiti",
                    "Heard Island and McDonald Islands",
                    "Holy See (the)",
                    "Honduras",
                    "Hong Kong",
                    "Hungary",
                    "Iceland",
                    "India",
                    "Indonesia",
                    "Iran (Islamic Republic of)",
                    "Iraq",
                    "Ireland",
                    "Isle of Man",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jersey",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Korea (the Democratic People's Republic of)",
                    "Korea (the Republic of)",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Lao People's Democratic Republic (the)",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macao",
                    "Madagascar",
                    "Malawi",
                    "Malaysia",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall Islands (the)",
                    "Martinique",
                    "Mauritania",
                    "Mauritius",
                    "Mayotte",
                    "Mexico",
                    "Micronesia (Federated States of)",
                    "Moldova (the Republic of)",
                    "Monaco",
                    "Mongolia",
                    "Montenegro",
                    "Montserrat",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Namibia",
                    "Nauru",
                    "Nepal",
                    "Netherlands (the)",
                    "New Caledonia",
                    "New Zealand",
                    "Nicaragua",
                    "Niger (the)",
                    "Nigeria",
                    "Niue",
                    "Norfolk Island",
                    "Northern Mariana Islands (the)",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau",
                    "Palestine, State of",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Philippines (the)",
                    "Pitcairn",
                    "Poland",
                    "Portugal",
                    "Puerto Rico",
                    "Qatar",
                    "Republic of North Macedonia",
                    "Romania",
                    "Russian Federation (the)",
                    "Rwanda",
                    "Réunion",
                    "Saint Barthélemy",
                    "Saint Helena, Ascension and Tristan da Cunha",
                    "Saint Kitts and Nevis",
                    "Saint Lucia",
                    "Saint Martin (French part)",
                    "Saint Pierre and Miquelon",
                    "Saint Vincent and the Grenadines",
                    "Samoa",
                    "San Marino",
                    "Sao Tome and Principe",
                    "Saudi Arabia",
                    "Senegal",
                    "Serbia",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Sint Maarten (Dutch part)",
                    "Slovakia",
                    "Slovenia",
                    "Solomon Islands",
                    "Somalia",
                    "South Africa",
                    "South Georgia and the South Sandwich Islands",
                    "South Sudan",
                    "Spain",
                    "Sri Lanka",
                    "Sudan (the)",
                    "Suriname",
                    "Svalbard and Jan Mayen",
                    "Sweden",
                    "Switzerland",
                    "Syrian Arab Republic",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania, United Republic of",
                    "Thailand",
                    "Timor-Leste",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Trinidad and Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Turks and Caicos Islands (the)",
                    "Tuvalu",
                    "Uganda",
                    "Ukraine",
                    "United Arab Emirates (the)",
                    "United Kingdom of Great Britain and Northern Ireland (the)",
                    "United States Minor Outlying Islands (the)",
                    "United States of America (the)",
                    "Uruguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Venezuela (Bolivarian Republic of)",
                    "Viet Nam",
                    "Virgin Islands (British)",
                    "Virgin Islands (U.S.)",
                    "Wallis and Futuna",
                    "Western Sahara",
                    "Yemen",
                    "Zambia",
                    "Zimbabwe",
                    "Åland Islands"
            ]
      }
  },
  methods: {
      cancelModal(){
          this.$modal.hide('payment');
          this.loading = false;
      },

    
   
     submitForm:function(){
         this.$validator.validate().then(valid => {
           if (valid) {
               var _this = this;
               _this.loading = true;
               _this.h
              

            //    this.$swal('Calculating Fee... Please hang on');
               this.$http.post(this.itseconfig.baseurl+'/saveinformation',this.formdata).then(res=>{

                  if(res.data.amount != null){
                    this.formdata.amount = res.data.amount.amount;
                    this.formdata.reference = res.data.amount.reference;
                    this.$modal.show('payment');s
                  }
               }).catch((error)=>{
                    _this.loading = false;
                    // this.$swal("Error!!!", 'Oops something went wrong. Please try again', 'error');
                    // this.toggledisabled = false;
                    //console.log('errror');
               });
          }
      });
      
     },

      processPayment(){
        this.loading = false;
        this.$swal('Payment Implementation Pending');
      }
  },
}
</script>
<style scoped>

</style>
