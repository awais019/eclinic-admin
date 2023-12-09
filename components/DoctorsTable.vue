<script setup lang="ts">
  const { getAll } = useDoctor();
  const { data } = await getAll();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left table-fixed"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">Name</th>
          <th class="py-2">Specialization</th>
          <th class="py-2">Gender</th>
          <th class="py-2">Hospital Name</th>
          <th class="py-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="doctor in data.data.doctors"
          :key="doctor.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">
            <nuxt-link :to="`/doctors/${doctor.id}`" class="hover:underline">
              {{ doctor.first_name }} {{ doctor.last_name }}
            </nuxt-link>
          </td>
          <td class="py-2">{{ doctor.specialization }}</td>
          <td class="py-2">{{ doctor.gender }}</td>
          <td class="py-2 truncate">{{ doctor.hospital_clinic_name }}</td>
          <td class="py-2">{{ doctor.city }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
