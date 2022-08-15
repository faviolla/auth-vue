<template>
  <div>
    <b-container fluid="sm">
      <b-row class="justify-content-md-center">
        <b-col col lg="4" md="7" v-if="this.user">
          <b-card
            no-body
            :img-src=this.user.avatar
            img-alt="Image"
            img-top
            :footer=this.user.fullname
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Userinfo',
  data () {
    return {
      user: '',
      userName: 'User name',
      newTocken: ''
    }
  },
  mounted() {
    this.newTocken = localStorage.access_token.replace(/^.|.$/g,"")
      
    if (localStorage.access_token) {
      axios.get('https://api.dev.taptiqapp.com/user/me', {
        headers: {
        'access-token': this.newTocken
        }
      }).then(result => {
        this.user = result.data
      }, error => {
        console.error(error);
      })
    }
  },
}
</script>