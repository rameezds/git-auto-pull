<template>
  <v-app id="inspire">
    <!-- class="grey lighten-3" -->
    <v-main v-if="this.$router.history._startLocation == '/' || this.$router.history._startLocation == '/merchant-redirect?success=true' || this.$router.history._startLocation == '/merchant-redirect?success=false' || this.$router.history._startLocation == '/merchant-redirect' || this.$router.history.current.path=='/merchant-redirect'">
    
     <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="text-center"
    >
    <v-spacer></v-spacer>
 <v-toolbar-title>Merchant's Site</v-toolbar-title>
 <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
    </v-main>
    <v-main v-else>
      <!-- <v-container > -->

      <v-container fluid class="fill-height">
        <v-row>
          <v-col>
            <div style="display: grid; justify-content: center">
              <v-img contain v-show="this.$router.history.current.path !='/verification'" :src="this.url_response.logo != null ? this.url_response.logo : ''" style="width: 150px"></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-0">
          <v-col style="padding-top:0px; padding-bottom:0px">
            <v-sheet min-height="75vh" max-height="75vh" style="overflow: scroll">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="mb-n4">
          <v-col class="pb-0 pt-0">
            <v-footer color="white">
              <v-col
                class="text-left hidden-sm-and-down pa-0 "
                cols="12"
                lg="4"
                md="4"
                sm="4"
              >
                <small style="color: #bdbdbd">
                  &copy; {{ new Date().getFullYear() }}<a href="#" style="color: #bdbdbd"> FTD </a>  —
                  All Rights Reserved
                </small>
              </v-col>

              <v-col
                class="text-center hidden-sm-and-down pa-0 "
                cols="12"
                lg="4"
                md="4"
                sm="4"
                
              >
              </v-col>
              <v-col
                class="text-right hidden-sm-and-down pa-0 "
                cols="12"
                lg="4"
                md="4"
                sm="4"
              >
                <small>
                  <a
                    href="##"
                    style="color: #bdbdbd; text-decoration: underline"
                    >Terms & Conditions</a
                  >
                  <span style="color: #bdbdbd"> | </span>
                  <a href="#" style="color: #bdbdbd; text-decoration: underline"
                    >Privacy Policy
                  </a>
                </small>
              </v-col>
              <v-col class="hidden-md-and-up text-center pb-0 pt-0">
                <small style="color: #bdbdbd">
                                    <a
                    href="#"
                    style="text-decoration: underline; color: #bdbdbd"
                  >
                    Terms & Conditions</a>
                    <span style="color: #bdbdbd"> | </span>
                  <a
                    href="#"
                    style="text-decoration: underline; color: #bdbdbd"
                  >
                    Privacy Policy</a>
                         <br>
                    &copy; {{ new Date().getFullYear() }}
                   <a href="#" style="color: #bdbdbd"> FTD </a> — All Rights
                    Reserved
             

                </small>
              </v-col>
            </v-footer>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["url_response"]),
  },
};
</script>