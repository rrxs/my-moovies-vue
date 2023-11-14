<template>
  <LoginLayout>
    <template #default>
      <form @submit.prevent="login">
        <h3 class="mb-8 text-center">Login to your account</h3>
        <div class="relative mb-8">
          <input type="email" class="input-field" placeholder="Email" />
        </div>
        <div class="relative mb-8">
          <input type="password" class="input-field" placeholder="Password" />
        </div>
        <div class="mb-12 pb-1 pt-1 text-center">
          <button class="btn-login" type="submit">Sign in</button>
        </div>
      </form>
    </template>
    <template #right-column>
      <SignupCall />
    </template>
  </LoginLayout>
</template>

<script setup lang="ts">
import { signin } from '../api/auth.api'
import SignupCall from '../components/SignupCall.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import router from '../router'

const login = async () => {
  // todo validation, authentication
  try {
    const response = await signin({
      email: 'r@r.com'
    })
    router.push({ name: 'home' })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>
