<script setup>
import { onMounted } from "vue";
import { useEmployeeStore } from "../stores/employee";
import EmployeeTable from "../components/tables/EmployeeTable.vue";
import { RouterLink } from "vue-router";

const employeeStore = useEmployeeStore();

onMounted(async () => {
  await employeeStore.getAllEmployees();
});
</script>

<template>
  <div class="container">
    <div class="buttons">
      <RouterLink class="button is-primary" to="employee/add">
        <strong> Create </strong>
      </RouterLink>
    </div>
    <EmployeeTable :tableData="employeeStore.employee.employees" />
  </div>
</template>
