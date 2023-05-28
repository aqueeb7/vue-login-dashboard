<template>
  <div class="container is-fluid is-max-widescreen my-5">
    <div class="columns">
      <div class="column is-1">
        <aside class="menu">
          <p class="menu-label">Dashboard</p>
          <ul class="menu-list">
            <li>
              <RouterLink to="/dashboard"> Dashboard </RouterLink>
              <RouterLink to="/employee"> Employee </RouterLink>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <NavBar />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
