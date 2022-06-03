<template>
  <v-container>
    <v-row>
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-img
            class="hidden-sm-and-down"
            :src="require(`../assets/access-denied.gif`)"
            style="height: 225px; width:400px"
          ></v-img>
          <!-- For smaller screens -->
            <v-img
            class="hidden-md-and-up"
            :src="require(`../assets/access-denied.gif`)"
            style="height: 150px; width:250px"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center mt-10" >
      <v-col>
        <h1 style="font-size: 20px; font-weight: 600">Access Denied</h1>
        <p style="font-size: 16px; font-weight: 400; line-height: 28px" class="mt-2">
          The Link You Have Followed Has Expired..! <br />  
        </p>
        <p class="mt-2" style="color: #bdbdbd" v-if="this.url_response.redirect_url == undefined">
          <small>
              Please close this window and try again...
          </small>
        </p>
      </v-col>
    </v-row>
        <v-row class="text-center">
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-btn
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            v-if="this.url_response.redirect_url != null"
            class="white--text text-capitalize hidden-sm-and-down"
            style="width: 282px"
            @click="redirectToMerchant"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Go Back To Merchant Site
            </span>
          </v-btn>
          <!-- For smaller screens -->
          <v-btn
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            v-if="this.url_response.redirect_url != null"
            class="white--text text-capitalize hidden-md-and-up"
            style="width: 200px"
            @click="redirectToMerchant"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Go Back To Merchant Site
            </span>
          </v-btn>
        </div>
        <p class="mt-2" style="color: #bdbdbd" v-if="this.url_response.redirect_url != null">
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
import {mapGetters} from 'vuex'

export default {
  name: "AccessDenied",
    data: () => ({
    countDown: 10,
    openedWindow: ''
  }),
  computed: {
    ...mapGetters(["url_response"]),
  },
  components: {},
    created() {
    if(this.url_response.redirect_url != null){
    this.countDownTimer();
    let url = this.url_response.redirect_url;
    setTimeout(() => {
      localStorage.clear();
      window.location.href = url;
    }, 10000);
    }
  },
  methods: {
    redirectToMerchant() {
      let url = this.url_response.redirect_url;
      localStorage.clear();
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
