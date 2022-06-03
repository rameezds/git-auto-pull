<template>
  <div class="text-center mt-5">
    <h1>We need to verify your identity!</h1>
    <p>Please Click the following link below</p>
    <a v-if="showUrl" :href="getUrl">Click Here!</a>
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
  </div>
</template>

<script>
import api from "../services/apis";

export default {
  name: "Home",
  data: () => ({
    token: "",
    url: "",
    message: "Redirecting...",
    snackbar: false,
    y: "top",
    x: "right",
    mode: "",
    timeout: 3000,
    text: "Something Went Wrong!",
    showUrl: false
  }),
  computed: {
    getUrl: function () {
      return this.url;
    },
  },
  created() {
    this.getToken().then((res) => {
      if (res == 1) {
        this.snackbar = true;
      } else {
        this.getLink().then(() => {});
      }
    });
  },

  methods: {
    async getToken() {
      await api
        .post("token", {
          email: "admin@ftdflow.com",
          password: "12345678",
        })
        .then((res) => {
          this.token = "Bearer " + res.data.token;
        })
        //eslint-disable-next-line
        .catch((error) => {
          return 1;
        });
    },
    async getLink() {
      await api
        .post(
          "verification_url",
          {
            request_id: Date.now(),
            callback_url: process.env.VUE_APP_TEST_CALLABCK_URL,
            redirect_url: process.env.VUE_APP_REDIRECT_URL,
            // method: "noBankID",
          },
          {
            headers: {
              authorization: this.token,
            },
          }
        )
        .then((res) => {
          this.url = res.data.data.verification_url;
           this.showUrl = true;
        })
        //eslint-disable-next-line
        .catch((error) => {
          this.snackbar = true;
        });
    },
  },
  components: {},
};
</script>
