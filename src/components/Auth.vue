<template>
  <div>
    <b-container fluid="sm">
      <b-row class="justify-content-md-center">
        <b-col col lg="4" md="7">
          <b-form @submit.prevent="onSubmit">
            <b-card :header=this.header>
              <b-form-group
                id="input-group-1"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.login"
                  type="text"
                  placeholder="Enter login"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-invalid-feedback v-if="errorText">
                Username or Password is incorrect
              </b-form-invalid-feedback>
              <b-button type="submit" variant="primary">Login</b-button>
              <b-button type="button" variant="outline-primary" to="/signup">Sign up</b-button>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  data () {
    return {
      header: 'Login',
      form: {
          login: '',
          password: ''
        },
      response: '',
      errorText: false,
      access_token: ''
    }
  },
  computed: {
    validation() {
      return true
    }
  },
  methods: {
    async onSubmit() {
      let postData = {
        login: this.form.login,
        password: this.form.password
      }
      let headers = {
        'content-type': 'application/json',
        'app-key': 'i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886'
      }
    await fetch('https://api.dev.taptiqapp.com/user/login', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(postData)
      })
      .then((result) => result.json())
      .then((data) => {
        this.response = data;
        localStorage.setItem('access_token', JSON.stringify(this.response.access_token))
        this.$router.push('/user')
      })
    }
  },
  
};
</script>

<style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  button {
    margin: 0 5px;
  }
  .invalid-feedback {
    margin-bottom: 1rem;
    text-align: left;
    display: block;
  }
</style>
