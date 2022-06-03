<template>
  <v-container>
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
//eslint-disable-next-line
import api from "../services/apis";

export default {
  name: "UserVerification",
  data: () => ({
    overlay: true,
    snackbar: false,
    y: "top",
    x: "right",
    mode: "",
    timeout: 3000,
    text: "Something Went Wrong!",
  }),
  components: {},
  created() {
    this.getQueryParams();
  },
  methods: {
    async makeRequest(transaction_id, success) {
      try {
        const res = await api.post("/transaction/get", {
          transaction_id: transaction_id,
          success: success,
        });
        this.$store.dispatch("redirect_url", res.data.data.redirect_url);
      } catch (error) {
        this.snackbar = true;
      }
    },
    getQueryParams() {

      let transaction_id = this.$route.query.transaction_id;
      let success = this.$route.query.success;

      if (success == "true") {
        this.makeRequest(transaction_id, success).then(() => {
          this.$router.push("/verified");
        });
      } else if (success == "false") {
        this.makeRequest(transaction_id, success).then(() => {
          this.$router.push("/failed");
        });
      }
    },
  },
};
</script>
