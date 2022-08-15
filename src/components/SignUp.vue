<template>
  <div>
    <b-container fluid="sm">
      <b-row class="justify-content-md-center">
        <b-col col lg="4" md="7">
          <b-form @submit.prevent="onSubmit">
            <b-card header="Sign up">
              <b-form-group
                id="input-group-1-1"
                label-for="input-1-1"
              >
                <b-form-input
                  id="input-1-1"
                  v-model="form.login"
                  type="text"
                  placeholder="Enter login"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2-1"
                label-for="input-2-1"
              >
                <b-form-input
                  id="input-2-1"
                  v-model="form.fullname"
                  type="text"
                  placeholder="Enter fullname"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3-1"
                label-for="input-3-1"
              >
                <b-form-input
                  id="input-3-1"
                  v-model="form.password"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Sign up</b-button>
              <b-button type="button" variant="outline-primary" to="/">Login</b-button>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Signup",
  data () {
    return {
      form: {
          login: '',
          fullname: '',
          password: ''
        },
      show: true,
      response: ''
    }
  },
  methods: {
    async onSubmit() {
      let postData = {
          login: this.form.login,
          fullname: this.form.fullname,
          password: this.form.password,
      }
      let headers = {
        'content-type': 'application/json',
        'app-key': 'i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886'
      }
      await fetch('https://api.dev.taptiqapp.com/user/sign-up', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData)
      })
      .then((result) => result.json())
      .then((data) => {
        this.response = data;
        console.log(this.response)
      })

      await fetch('https://api.dev.taptiqapp.com/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'app-key': 'i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886',
        },
        body: JSON.stringify({
          login: this.form.login,
          password: this.form.password,
          })
      })
      .then((result) => result.json())
      .then((data) => {
        this.response = data;
        localStorage.setItem('access_token', JSON.stringify(this.response.access_token))
        this.$router.push('/user')
      })
    }
  }
}
</script>

<style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  button {
    margin: 0 5px;
  }
</style>
