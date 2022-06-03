<template>
  <v-container>
    <v-row>
      <v-col class="pb-0 pt-0">
        <div style="display: grid; justify-content: center">
          <v-img
            :src="require(`../assets/auth.gif`)"
            style="height: 138px; width: 128px"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="pb-0 pt-0 hidden-sm-and-down">
        <h1 style="font-size: 20px; font-weight: 600">Authentication</h1>
        <p
          style="font-size: 16px; font-weight: 400; line-height: 28px"
          class="mt-2"
        >
          Please choose one of the following options. <br />
        </p>
      </v-col>
      <v-col class="pb-0 pt-0 hidden-md-and-up">
        <h1 style="font-size: 16px; font-weight: 600">Authentication</h1>
        <p
          style="font-size: 14px; font-weight: 400; line-height: 28px"
          class="mt-2"
        >
          Please choose one of the following options. <br />
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col style="max-height: 35vh; overflow-y: scroll" class="pb-0 pt-0">
        <div style="display: grid; justify-content: center">
          <v-list class="hidden-sm-and-down" style="width: 445px">
            <v-list-item
              style="background-color: #eff2f7; border-radius: 5px"
              class="mt-3"
              v-for="option in options"
              :key="option.title"
              @click="selectedOption(option.value)"
            >
              <v-list-item-avatar size="40" style="background-color: white">
                <v-img
                  max-width="25"
                  max-height="25"
                  style="border-radius: 0px"
                  :alt="`${option.title} avatar`"
                  :src="option.avatar"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  style="
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 19px;
                    text-align: left;
                  "
                  v-text="option.title"
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <!-- :color="option.active ? 'deep-purple accent-4' : 'grey'" -->
                <v-icon style="color: black"> mdi-arrow-right </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
          <!-- For smaller screens -->
          <v-list style="width: 220px" class="hidden-md-and-up">
            <v-list-item
              style="background-color: #eff2f7; border-radius: 5px"
              class="mt-3"
              v-for="option in options"
              :key="option.title"
              @click="selectedOption(option.value)"
            >
              <v-list-item-avatar style="border-radius: 0px">
                <v-img
                  :alt="`${option.title} avatar`"
                  :src="option.avatar"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  style="
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 19px;
                    text-align: left;
                  "
                  v-text="option.title"
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <!-- :color="option.active ? 'deep-purple accent-4' : 'grey'" -->
                <v-icon style="color: black"> mdi-arrow-right </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
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
import { mapGetters } from "vuex";
import api from "../services/apis";

export default {
  name: "Select",
  data: () => ({
    overlay: false,
    snackbar: false,
    y: "top",
    x: "right",
    mode: "",
    timeout: 3000,
    text: "Something Went Wrong!",
    options: [
      {
        avatar: require(`../assets/bankid-3.png`),
        title: "Bank ID SE",
        value: "seBankID",
      },
      // {
      //   avatar: require(`../assets/yoti-3.png`),
      //   title: "Yoti App",
      //   value: "yoti",
      // },
      {
        avatar: require(`../assets/noBankID.png`),
        title: "Norwegian Bank ID",
        value: "noBankID",
      },
      {
        avatar: require(`../assets/FTN.png`),
        title: "Finnish FTN",
        value: "fiTupas",
      },
      {
        avatar: require(`../assets/iDIN.png`),
        title: "Dutch iDIN",
        value: "nlIDIN",
      },
    ],
  }),
  components: {},
  methods: {
    selectedOption(option) {
      // this.$router.push(option);
      this.makeRequest(option)
    },
    async makeRequest(method) {
      try {
        this.overlay = true;
        const res = await api.post("/transaction/new", {
          provider: method,
          request_id: this.url_response.request_id,
        });
        window.location.href = res.data.data.accessUrl;
      } catch (error) {
        this.overlay = false;
        this.snackbar = true;
        setTimeout(()=>{
          this.redirectToMerchant()
        }, 2000);
      }
    },
    redirectToMerchant() {
      let url = this.url_response.redirect_url;
      localStorage.clear();
      window.location.href = url;
    },
  },
  computed: {
    ...mapGetters(["url_response"]),
  },
  mounted() {
    if (this.url_response.method == "yoti") {
      this.options = [
        {
          avatar: require(`../assets/yoti-3.png`),
          title: "Yoti App",
          value: "yoti",
        },
      ];
    } else if (this.url_response.method == "seBankID") {
      this.options = [
        {
          avatar: require(`../assets/bankid-3.png`),
          title: "Bank ID SE",
          value: "seBankID",
        },
      ];
    } else if (this.url_response.method == "noBankID") {
      this.options = [
        {
          avatar: require(`../assets/noBankID.png`),
          title: "Norwegian Bank ID",
          value: "noBankID",
        },
      ];
    } else if (this.url_response.method == "fiTupas") {
      this.options = [
        {
          avatar: require(`../assets/FTN.png`),
          title: "Finnish FTN",
          value: "fiTupas",
        },
      ];
    } else if (this.url_response.method == "nlIDIN") {
      this.options = [
        {
          avatar: require(`../assets/iDIN.png`),
          title: "Dutch iDIN",
          value: "nlIDIN",
        },
      ];
    }
  },
};
</script>
