<template>
  <LoginLayout>
    <template #default>
      <form>
        <h3 class="mb-8 text-center">Create a new account</h3>
        <div class="relative mb-8">
          <input type="text" class="input-field" placeholder="Name" />
        </div>
        <div class="relative mb-8">
          <input type="email" class="input-field" placeholder="Email" />
        </div>
        <div class="relative mb-8">
          <input type="password" class="input-field" placeholder="Password" />
        </div>

        <!--Submit button-->
        <div class="mb-12 pb-1 pt-1 text-center">
          <button class="btn-login" type="button">Create account</button>
        </div>
      </form>
    </template>
    <template #right-column>
      <SigninCall />
    </template>
  </LoginLayout>
</template>

<script setup lang="ts">
import LoginLayout from '../layouts/LoginLayout.vue'
import SigninCall from '../components/SigninCall.vue'
</script>
