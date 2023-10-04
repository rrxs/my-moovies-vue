<script setup lang="ts"></script>

<template>
  <form>
    <h3 class="mb-8 text-center">Login to your account</h3>
    <!--Username input-->
    <div class="relative mb-8">
      <input type="email" class="input-field" id="exampleFormControlInput1" placeholder="Email" />
    </div>

    <!--Password input-->
    <div class="relative mb-8">
      <input
        type="password"
        class="input-field"
        id="exampleFormControlInput11"
        placeholder="Password"
      />
    </div>

    <!--Submit button-->
    <div class="mb-12 pb-1 pt-1 text-center">
      <button class="btn-login" type="button">Sign in</button>
    </div>
  </form>
</template>
