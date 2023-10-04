<template>
  <section class="h-full">
    <div class="block bg-white h-full">
      <div class="g-0 lg:flex lg:flex-wrap w-full h-full">
        <!-- Left column container-->
        <div class="px-4 md:px-0 lg:w-6/12 flex items-center justify-center">
          <div class="md:mx-6 lg:w-8/12 md:p-12 w-full">
            <!--Logo-->
            <div class="text-center">
              <img class="mx-auto w-48 my-10" src="../assets/logo.png" alt="logo" />
            </div>

            <router-view />
          </div>
        </div>

        <!-- Right column container with background and description-->
        <div
          class="flex items-center lg:w-6/12"
          style="background: linear-gradient(to top, #11417e, #1452dc)"
        >
          <router-view name="RightSide" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
