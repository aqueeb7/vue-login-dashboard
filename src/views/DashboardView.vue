<script setup>
import { onMounted } from "vue";
import { useEmployeeStore } from "../stores/employee";

const employeeStore = useEmployeeStore();


onMounted(async () => {
  await employeeStore.getAllEmployees();
});
</script>

<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-3">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Total Employees</p>
              <p class="subtitle">{{ employeeStore.employee.employees.length }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
