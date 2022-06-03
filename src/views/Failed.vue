<template>
  <v-container>
    <v-row>
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-img
            :src="require(`../assets/verification-failed.gif`)"
            style="height: 126px; width: 95px"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center mt-10">
      <v-col class="hidden-sm-and-down">
        <h1 style="font-size: 20px; font-weight: 600">
          Authentication Failed!!
        </h1>
        <p
          style="font-size: 16px; font-weight: 400; line-height: 28px"
          class="mt-2"
        >
          Sorry, we’re unable to verify your identity. <br />
        </p>
      </v-col>
        <v-col class="hidden-md-and-up">
        <h1 style="font-size: 16px; font-weight: 600">
          Authentication Failed!!
        </h1>
        <p
          style="font-size: 14px; font-weight: 400; line-height: 28px"
          class="mt-2"
        >
          Sorry, we’re unable to verify your identity. <br />
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-btn
            @click="redirectToMerchant()"
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            class="white--text text-capitalize hidden-sm-and-down"
            style="width: 282px"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Go Back To Merchant Site
            </span>
          </v-btn>
          <!-- For smaller screens -->
          <v-btn
            @click="redirectToMerchant()"
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            class="white--text text-capitalize hidden-md-and-up"
            style="width: 200px"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Go Back To Merchant Site
            </span>
          </v-btn>
        </div>
        <p class="mt-2" style="color: #bdbdbd">
          <small>
            You will be redirected back to Merchant Site in
            {{ countDown }} seconds
          </small>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Failed",
  data: () => ({
    countDown: 10,
  }),
  created() {
    this.countDownTimer();

    let url = this.redirect_url;
    setTimeout(() => {
      localStorage.clear()
      window.location.href = url;
    }, 10000);
  },
  computed: {
    ...mapGetters(["redirect_url"]),
    ...mapGetters(["url_response"]),
  },
  components: {},
  methods: {
    redirectToMerchant() {
      let url = this.redirect_url;
      localStorage.clear()
      window.location.href = url;
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
};
</script>
