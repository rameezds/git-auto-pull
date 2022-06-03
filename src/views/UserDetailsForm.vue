<template>
  <v-container>
    <v-row class="text-center hidden-sm-and-down ma-3" justify="center">
      <h5 style="font-size: 16px; font-weight: 500">
        Please Enter Correct Details For The Required Fields (<span
          style="color: red"
          >*</span
        >)
      </h5>
    </v-row>
    <v-row class="text-center ma-3 hidden-md-and-up ma-3" justify="center">
      <h5 style="font-size: 14px; font-weight: 500">
        Please Enter Correct Details For The Required Fields (<span
          style="color: red"
          >*</span
        >)
      </h5>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row justify="center" class="mt-5">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  What is your country of residence?
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-select
                :items="countries"
                placeholder="Please Select"
                :rules="rules.selectRule"
                outlined
                dense
                required
                :menu-props="{
                  maxHeight: 175,
                  offsetY: true,
                  transition: 'scale-transition',
                  rounded: 'lg',
                }"
                v-model="country"
                class="custom-select"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  Citizenship?
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-select
                :items="countries"
                placeholder="Please Select"
                outlined
                required
                dense
                :rules="rules.selectRule"
                :menu-props="{
                  maxHeight: 175,
                  offsetY: true,
                  transition: 'scale-transition',
                  rounded: 'lg',
                }"
                v-model="citizenship"
                class="custom-select"
              >
                <!-- style="text-overflow: ellipsis; max-height: 40px; overflow: ellipsis;" -->
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  Are you a politically exposed person?
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-select
                :items="options"
                placeholder="Please Select"
                outlined
                dense
                :rules="rules.selectRule"
                :menu-props="{
                  maxHeight: 175,
                  offsetY: true,
                  transition: 'scale-transition',
                  rounded: 'lg',
                }"
                class="custom-select"
                v-model="politicallyExposed"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  Are you using Quickbit Affiliate on behalf of someone else?
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-select
                :items="options"
                placeholder="Please Select"
                outlined
                dense
                :rules="rules.selectRule"
                :menu-props="{
                  maxHeight: 175,
                  offsetY: true,
                  transition: 'scale-transition',
                  rounded: 'lg',
                }"
                class="custom-select"
                v-model="someoneBehalf"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  How often do you expect to use the Quickbit Affiliate service?
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-select
                :items="howOftenItems"
                placeholder="Please Select"
                outlined
                dense
                :rules="rules.selectRule"
                :menu-props="{
                  maxHeight: 175,
                  offsetY: true,
                  transition: 'scale-transition',
                  rounded: 'lg',
                }"
                class="custom-select"
                v-model="howOften"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" class="pt-0 pb-0">
              <label
                ><h6
                  style="font-size: 12px; font-weight: 400; color: #484848"
                  class="mb-2"
                >
                  What amount do you expect to transact monthly? (€)
                  <span style="color: red">*</span>
                </h6></label
              >
              <v-text-field
                placeholder="Please enter your amount in (€)"
                outlined
                dense
                type="number"
                :rules="rules.transactamountRule"
                class="custom-select"
                v-model="transactAmount"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-n2">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6" class="pb-0">
              <v-row>
                <v-col class="pb-0">
                  <label
                    ><h6
                      style="font-size: 12px; font-weight: 400; color: #484848"
                      class="mb-2"
                    >
                      Why are you using Quickbit Affiliate?
                      <span style="color: red">*</span>
                    </h6></label
                  >
                  <v-select
                    :items="whyQBitems"
                    placeholder="Please Select"
                    outlined
                    dense
                    :rules="rules.selectRule"
                    :menu-props="{
                      maxHeight: 175,
                      offsetY: true,
                      transition: 'scale-transition',
                      rounded: 'lg',
                    }"
                    class="custom-select"
                    v-model="whyQB"
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row v-show="whyQB == 'Other'">
                <v-col class="pt-0 pb-0">
                  <label
                    ><h6
                      style="font-size: 12px; font-weight: 400; color: #484848"
                      class="mb-2"
                    >
                      What is your reason of using Quickbit Affiliate?
                      <span style="color: red">*</span>
                    </h6></label
                  >
                  <v-text-field
                    placeholder="Please enter your reason of using Quickbit Affiliate"
                    outlined
                    required
                    dense
                    :rules="whyQB == 'Other' ? rules.reasonRule : []"
                    class="custom-select"
                    v-model="whyQBReason"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" class="pb-0">
              <v-row>
                <v-col class="pb-0">
                  <label
                    ><h6
                      style="font-size: 12px; font-weight: 400; color: #484848"
                      class="mb-2"
                    >
                      What is your main source of funds?
                      <span style="color: red">*</span>
                    </h6></label
                  >
                  <v-select
                    :items="incomeSourceOptions"
                    placeholder="Please Select"
                    outlined
                    dense
                    :rules="rules.selectRule"
                    :menu-props="{
                      maxHeight: 175,
                      offsetY: true,
                      transition: 'scale-transition',
                      rounded: 'lg',
                    }"
                    class="custom-select"
                    v-model="incomeSource"
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row v-show="incomeSource != ''" transition="scale-transition">
                <v-col class="pt-0 pb-0">
                  <label
                    ><h6
                      style="font-size: 12px; font-weight: 400; color: #484848"
                      class="mb-2"
                    >
                      {{ getLabelText }}
                      <span style="color: red">*</span>
                    </h6></label
                  >
                  <v-text-field
                    placeholder="Please enter amount in (€)"
                    outlined
                    required
                    dense
                    type="number"
                    :rules="rules.incomeRule"
                    class="custom-select"
                    v-model="incomeBeforeTax"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <v-row justify="center">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6"> </v-col>
            <v-col cols="12" lg="6" md="6" sm="6">

            </v-col>
          </v-row>
        </v-col>
      </v-row> -->
      <v-row justify="center">
        <v-col class="custom-col-width">
          <v-row class="custom-row-width">
            <v-col cols="12" lg="6" md="6" sm="6" class="hidden-sm-and-up">
              <v-btn
                class="text-capitalize"
                color="white"
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: black;
                  width: 100%;
                "
                @click="redirectToMerchant"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6" class="hidden-xs-only">
              <v-btn
                class="text-capitalize"
                color="white"
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: black;
                  width: 125px;
                "
                @click="redirectToMerchant"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="6"
              class="text-right hidden-xs-only"
            >
              <v-btn
                class="text-capitalize"
                :color="
                  this.url_response.theme != null
                    ? this.url_response.theme
                    : 'black'
                "
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: white;
                  width: 125px;
                "
                @click="submitForm"
              >
                Submit
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="6"
              class="text-right hidden-sm-and-up"
            >
              <v-btn
                class="text-capitalize"
                :color="
                  this.url_response.theme != null
                    ? this.url_response.theme
                    : 'black'
                "
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: white;
                  width: 100%;
                "
                @click="submitForm"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>

    <!-- SNACKBAR -->
    <v-snackbar
      color="#FFCDD2"
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      <v-icon color="black"> mdi-alert-circle-outline </v-icon>
      <strong style="color: black" class="ml-2">{{ text }}</strong>
    </v-snackbar>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import api from "../services/apis";
import { mapGetters } from "vuex";

export default {
  name: "UserDetailsForm",
  components: {},
  data: () => ({
    valid: false,
    overlay: false,
    showIncomeField: true,
    showReasonField: true,
    citizenship: "",
    country: "",
    politicallyExposed: "",
    someoneBehalf: "",
    howOften: "",
    transactAmount: "",
    whyQB: "",
    incomeSource: "",
    whyQBReason: "",
    incomeBeforeTax: "",
    rules: {
      selectRule: [(v) => !!v || "Please choose an option"],
      citizenshipRules: [
        (v) => !!v || "Citizenship(s) is required",
        (v) => v.length > 2 || "Max (2) citizenships are allowed",
      ],
      transactamountRule: [
        (v) => !!v || "Expected monthly transact amount is required",
      ],
      incomeRule: [(v) => !!v || "Monthly income is required"],
      reasonRule: [(v) => !!v || "Your message is required"],
    },
    options: ["Yes", "No"],
    howOftenItems: ["Daily", "Weekly", "Monthly", "Yearly"],
    whyQBitems: ["Value 1", "Other"],
    incomeSourceOptions: [
      "Salary",
      "Savings",
      "Pension",
      "Social welfare",
      "Inheritance",
      "Other",
    ],
    countries: [
      "Afghanistan",
      "Åland Islands",
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
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia, Plurinational State of",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo, the Democratic Republic of the",
      "Cook Islands",
      "Costa Rica",
      "Côte d'Ivoire",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
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
      "Holy See (Vatican City State)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran, Islamic Republic of",
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
      "Korea, Democratic People's Republic of",
      "Korea, Republic of",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Macedonia, the Former Yugoslav Republic of",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia, Federated States of",
      "Moldova, Republic of",
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
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Réunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
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
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan, Province of China",
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
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "United States Minor Outlying Islands",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela, Bolivarian Republic of",
      "Viet Nam",
      "Virgin Islands, British",
      "Virgin Islands, U.S.",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    snackbar: false,
    y: "top",
    x: "right",
    mode: "",
    timeout: 3000,
    text: "Something Went Wrong!",
    formData: [],
  }),
  created() {},
  computed: {
    ...mapGetters(["url_response"]),
    getLabelText() {
      let lableText = "";
      switch (this.incomeSource) {
        case "Salary": {
          lableText = "What is your monthly salary before tax? (€)";
          break;
        }
        case "Savings": {
          lableText = "What amount do you withdraw monthly? (€)";
          break;
        }
        case "Pension": {
          lableText = "What is your monthly pension? (€)";
          break;
        }
        case "Social welfare": {
          lableText = "What is your monthly pension? (€)";
          break;
        }
        case "Inheritance": {
          lableText = "What amount do you use or withdraw monthly? (€)";
          break;
        }
        case "Other": {
          lableText = "Please select monthly income amount (€)";
          break;
        }
        default: {
          lableText = "Please select monthly income amount (€)";
          break;
        }
      }
      return lableText;
    },
  },
  methods: {
    async makeRequest() {
      try {
        this.formData.push({
          citizenship: this.citizenship,
          country: this.country,
          politicallyExposed: this.politicallyExposed,
          someoneBehalf: this.someoneBehalf,
          howOften: this.howOften,
          transactAmount: this.transactAmount,
          whyQB: this.whyQB,
          whyQBReason: this.whyQBReason,
          incomeSource: this.incomeSource,
          incomeBeforeTax: this.incomeBeforeTax,
        });
        const res = await api.post("user_data", {
          data: JSON.stringify(this.formData),
          request_id: this.url_response.request_id,
        });
        if (res.data.error) {
          this.text = res.data.message;
          this.snackbar = true;
        } else {
          return true;
        }
      } catch (error) {
        this.snackbar = true;
        return false;
      }
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        this.makeRequest().then((res) => {
          if(res){
          this.overlay = false;
          this.$router.push("/home");
          }
          else{
            this.snackbar = true;
            setTimeout(()=>{  
              this.redirectToMerchant();
            }, 2000);
            
          }
        });
      }
    },
    redirectToMerchant() {
      let url = this.url_response.redirect_url;
      localStorage.clear();
      window.location.href = url;
    },
  },
};
</script>
<style scoped>
.custom-select {
  font-size: 12px;
  font-weight: 400;
}
.custom-row-width {
  max-width: 750px;
}
.custom-col-width {
  max-width: 750px;
}
</style>