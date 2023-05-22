import { reactive } from 'vue'
import { defineStore } from "pinia"
import apiClient from "../services/api";

export const useEmployeeStore = defineStore('employee', () => {
  const employee = reactive({
    employees: [],
    loading: false,
    error: null,
  })
  const getAllEmployees = async () => {
    try {
      employee.loading = true;
      const { data } = await apiClient.get('/get-all-emp');
      employee.employees = data.details;
    } catch (error) {
      employee.error = error.message;
    } finally {
      employee.loading = false;
    }
  }
  const getEmployee = async (id) => {
    try {
      employee.loading = true;
      const { data } = await apiClient.get(`/employees/${id}`);
      employee.employee = data.data;
    } catch (error) {
      employee.error = error.message;
    } finally {
      employee.loading = false;
    }
  }
  const addEmployee = async (data) => {

    try {
      employee.loading = true;
      const { data } = await apiClient.post('/employees', data);
      employee.employees.unshift(data.data);
    } catch (error) {
      employee.error = error.message;
    } finally {
      employee.loading = false;
    }
  }
  const updateEmployee = async (id, data) => {
    try {
      employee.loading = true;
      const { data } = await apiClient.put(`/employees/${id}`, data);
      const index = employee.employees.findIndex((employee) => employee.id === id);
      employee.employees[index] = data.data;
    } catch (error) {
      employee.error = error.message;
    } finally {
      employee.loading = false;
    }
  }
  const deleteEmployee = async (id) => {
    try {
      employee.loading = true;
      const { data } = await apiClient.delete(`/employees/${id}`);
      const index = employee.employees.findIndex((employee) => employee.id === id);
      employee.employees.splice(index, 1);
    } catch (error) {
      employee.error = error.message;
    } finally {
      employee.loading = false;
    }
  }
  return {
    employee,
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  }

})



