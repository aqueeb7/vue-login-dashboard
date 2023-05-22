<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

const username = ref("");
const password = ref("");

const ulogin = async () => {
  try {
    await authStore.login({
      username: username.value,
      password: password.value,
    });
    router.push("/employee");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <section class="section is-large">
      <div class="columns is-centered is-flex">
        <div class="column is-half">
          <form
            class="box is-justify-content-center is-align-items-center"
            @submit.prevent="ulogin"
          >
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  v-model="username"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" v-model="password" type="password" placeholder="********" />
              </div>
            </div>

            <button class="button is-primary">Sign in</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  <!-- <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="block container">
        <div class="box bulma-center-mixin-parent">
          <div class="card bulma-center-mixin">

            <div class="card-content">
              <div class="content">
                <div>
                  <h1 class="title is-3">Login</h1>
                </div>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Username"
                      v-model="username"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-link" @click="ulogin">
                      Log In
                    </button>
                  </div>
                </div>
              </div>

              <form class="" @submit.prevent="ulogin">
                  <label>Email</label>
                  <input type="text" v-model="username" />
                  <label>Password</label>
                  <input type="password" v-model="password" />
                  <button type="submit">Login</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
