<template>
  <v-container>
    <v-row>
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-img
            :src="require(`../assets/loading.gif`)"
            style="height: 126px; width: 95px"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center mt-10">
      <v-col class="hidden-sm-and-down">
        <h1 style="font-size: 20px; font-weight: 600">Want to get verified?</h1>
        <p
          style="
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            max-width: 440px;
            margin-left: auto;
            margin-right: auto;
          "
          class="mt-2"
        >
          We need to verify your identity. It would take only 1-2 minutes.
          Please ensure to use real identity for the verification process.
        </p>
      </v-col>
            <v-col class="hidden-md-and-up">
        <h1 style="font-size: 16px; font-weight: 600">Want to get verified?</h1>
        <p
          style="
            font-size: 14px;
            font-weight: 400;
            line-height: 28px;
            max-width: 440px;
            margin-left: auto;
            margin-right: auto;
          "
          class="mt-2"
        >
          We need to verify your identity. It would take only 1-2 minutes.
          Please ensure to use real identity for the verification process.
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <div style="display: grid; justify-content: center">
          <v-btn
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            class="white--text text-capitalize hidden-sm-and-down"
            style="width: 365px"
            @click="redirecttoSelect()"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Start Verification
            </span>
            <v-icon right dark class="ml-5"> mdi-arrow-right </v-icon>
          </v-btn>
          <!-- For smaller screens -->
          <v-btn
            x-large
            :color="this.url_response.theme != null ? this.url_response.theme : 'black'"
            class="white--text text-capitalize hidden-md-and-up"
            @click="redirecttoSelect()"
          >
            <span
              style="font-size: 14px; font-weight: 500; letter-spacing: 0.5px"
            >
              Start Verification
            </span>
            <v-icon right dark class="ml-5"> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  data: () => ({}),

  components: {},
  computed: {
    ...mapGetters(["url_response"]),
  },
  methods: {
    redirecttoSelect() {
      this.$router.push("/select");
    },
  },
};
</script>
