<template>
  <v-container>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
  </v-container>
</template>

<script>
import api from "../services/apis";

export default {
  name: "Verification",
  components: {},
  data: () => ({
    overlay: true,
    message: "Redirecting...",
    snackbar: false,
    y: "top",
    x: "right",
    mode: "",
    timeout: 3000,
    text: "Something Went Wrong!",
  }),
  created() {
    this.getQueryParams();
  },
  computed: {
    getMsg: function () {
      return this.message;
    },
  },
  methods: {
    async makeRequest(merchant_id, request_id) {
      try {
        const res = await api.post("/verify_verification_url", {
          merchant_id: merchant_id,
          request_id: request_id,
        });
        if (res.data.error) {
          this.text = res.data.message;
          this.snackbar = true;
          return false; 
        } else {
          this.$store.dispatch("url_response", res.data.data);
          return true;
        }
      } catch (error) {
        this.snackbar = true;
        return false;
      }
    },
    getQueryParams() {
      let merchant_id = this.$route.query.id;
      let request_id = this.$route.query.request_id;
      this.makeRequest(merchant_id, request_id).then((res)=>{
        if(res){
          this.$router.push("/user-details")
        }
        else{
          setTimeout(()=>{
            this.$router.push("/access-denied")
          }, 2000)
        }
        
      });
    },
  },
};
</script>
