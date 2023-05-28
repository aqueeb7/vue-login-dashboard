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
    router.push("/dashboard");
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
</template>
