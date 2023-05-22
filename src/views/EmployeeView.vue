<script setup>
import { onMounted } from "vue";
import { useEmployeeStore } from "../stores/employee";
import EmployeeTable from "../components/EmployeeTable.vue";
import NavBar from "../components/NavBar.vue";

const employeeStore = useEmployeeStore();

onMounted(async () => {
  await employeeStore.getAllEmployees();
});
</script>

<template>
  <div class="container is-fluid is-max-widescreen">
    <NavBar />
    <div class="columns">
      <div class="column is-1 is-$black">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Employee</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div class="section">
          <div class="block">
            <EmployeeTable :tableData="employeeStore.employee.employees" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
