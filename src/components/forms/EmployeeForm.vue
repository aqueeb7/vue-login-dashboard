<script setup>
import { reactive } from "vue";
import { useEmployeeStore } from "../../stores/employee";
import { useRouter } from "vue-router";
const router = useRouter();
const employeeStore = useEmployeeStore();

const formdata = reactive({
  empName: "",
  email: "",
  gender: "",
  dob: "",
  phone: "",
  address1: "",
  address2: "",
  father: "",
  mother: "",
  bankName: "",
  accNumber: "",
  ifsc: "",
  pan: "",
  aadhar: "",
  voterId: "",
  dl: "",
  passport: "",
  company: "",
  department: "",
  designation: "",
  role: "",
});

const uSubmit = async () => {
  try {
    console.log(formdata);
    await employeeStore.addEmployee(formdata)
    router.push("/dashboard");
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <!-- {{ formdata }} -->
      <form @submit.prevent="uSubmit">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="formdata.empName" class="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="formdata.email" class="input" type="email" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Gender</label>
        <div class="control">
          <label class="radio">
            <input v-model="formdata.gender" value="male" type="radio" name="question" />
            Male
          </label>
          <label class="radio">
            <input v-model="formdata.gender" value="female" type="radio" name="question" />
            Female
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Date of Birth</label>
        <div class="control">
          <input v-model="formdata.dob" class="input" type="date" />
        </div>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input v-model="formdata.phone" class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Permanent Address</label>
        <div class="control">
          <input v-model="formdata.address1" class="input" type="textarea" />
        </div>
      </div>
      <div class="field">
        <label class="label">Correspondence Address</label>
        <div class="control">
          <input v-model="formdata.address2" class="input" type="textarea" />
        </div>
      </div>
      <div class="field">
        <label class="label">Father's Name</label>
        <div class="control">
          <input v-model="formdata.father" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Mother's Name</label>
        <div class="control">
          <input v-model="formdata.mother" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Bank Name</label>
        <div class="control">
          <input v-model="formdata.bankName" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Account Number</label>
        <div class="control">
          <input v-model="formdata.accNumber" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">IFSC Code</label>
        <div class="control">
          <input v-model="formdata.ifsc" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">PAN Number</label>
        <div class="control">
          <input v-model="formdata.pan" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Aadhar Number</label>
        <div class="control">
          <input v-model="formdata.aadhar" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Voter Id Number</label>
        <div class="control">
          <input v-model="formdata.voterId" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Driving Licence Number</label>
        <div class="control">
          <input v-model="formdata.dl" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Passport Number</label>
        <div class="control">
          <input v-model="formdata.passport" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Company</label>
        <div class="control">
          <input v-model="formdata.company" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Department</label>
        <div class="control">
          <input v-model="formdata.department" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Designation</label>
        <div class="control">
          <input v-model="formdata.designation" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Role</label>
        <div class="control">
          <input v-model="formdata.role" class="input" type="text" />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>
