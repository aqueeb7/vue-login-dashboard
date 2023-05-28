<template>
  <div>
    <div class="table-container">
      <table class="table is-bordered is-narrow is-striped is-hoverable">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>C Address</th>
          <th>P Address</th>
          <th>Father</th>
          <th>Mother</th>
          <th>Bank</th>
          <th>A/C no.</th>
          <th>IFSC Code</th>
          <th>PAN</th>
          <th>Aashar</th>
          <th>Voter Id</th>
          <th>DL</th>
          <th>Passpost</th>
          <th>Company</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Role</th>
        </thead>
        <tbody>
          <tr v-for="row in tableData" :key="row.id">
            <td>
              <b>{{ row.emp_name }}</b>
            </td>
            <td>{{ row.email }}</td>
            <td>{{ row.gender }}</td>
            <td>{{ row.dob }}</td>
            <td>{{ row.phone }}</td>
            <td>{{ row.correspondence_address }}</td>
            <td>{{ row.permanent_address }}</td>
            <td>{{ row.fathers_name }}</td>
            <td>{{ row.mothers_name }}</td>
            <td>{{ row.bank_name }}</td>
            <td>{{ row.acc_no }}</td>
            <td>{{ row.ifsc }}</td>
            <td>{{ row.pan }}</td>
            <td>{{ row.adhar }}</td>
            <td>{{ row.voter_id }}</td>
            <td>{{ row.driving_liscense }}</td>
            <td>{{ row.passport }}</td>
            <td>{{ row.company }}</td>
            <td>{{ row.department }}</td>
            <td>{{ row.designation }}</td>
            <td>{{ row.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
};
</script>
