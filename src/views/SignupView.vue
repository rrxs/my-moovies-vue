<template>
  <LoginLayout>
    <template #default>
      <form @submit.prevent="O">
        <h3 class="mb-8 text-center">Create a new account</h3>
        <div class="relative mb-8">
          <input type="text" class="input-field" placeholder="Name" v-model="name" />
        </div>
        <div class="relative mb-8">
          <input type="email" class="input-field" placeholder="Email" v-model="email" />
        </div>
        <div class="relative mb-8">
          <input type="password" class="input-field" placeholder="Password" v-model="password" />
        </div>

        <!--Submit button-->
        <div class="mb-12 pb-1 pt-1 text-center">
          <button class="btn-login" type="submit">Create account</button>
        </div>
      </form>
    </template>
    <template #right-column>
      <SigninCall />
    </template>
  </LoginLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import SigninCall from '../components/SigninCall.vue'
import { signup } from '../api/auth.api'
import router from '../router'

const name = ref('')
const email = ref('')
const password = ref('')

const O = async () => {
  // todo validation
  try {
    const response = await signup({
      email: name.value,
      name: email.value,
      password: password.value
    })
    router.push({ name: 'home' })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>
