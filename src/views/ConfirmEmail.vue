<template>
  <div class="flex confirmemail w-full flex-column h-full justify-content-between">
    <div class="signup-container flex flex-column align-items-center">
      <span class="flex text-base mb-5 align-items-center justify-content-center gap-2 chngeText"> <i
          class="pi pi-arrow-left "></i>Change Email
        Address</span>
      <Steppers />
      <StepProgress />
      <div class="flex flex-column">
        <Title heading="Confirm Your Email" />
        <span class="mb-3 mt-1 emailtext text-center text-base">We’ve sent a code to your email: <a href="#"
            class=" no-underline">example@exam.com</a></span>
      </div>
      <div class="card flex justify-content-center email-inputs w-full">
        <div class="flex flex-column gap-2 emailcontainer w-full flex ">

          <div class="card flex justify-content-center">
            <InputOtp v-model="value" :length="6" placeholder="ok" />
          </div>
          <router-link class="no-underline" to="/signup-password">
            <CommonButton class="mt-3" btnText="Confirm" />
          </router-link>

        </div>
      </div>

    </div>
  </div>

</template>
<script setup>
import 'primeicons/primeicons.css';
import StepProgress from '../components/StepProgress.vue';
import Title from '../components/Titles.vue';
import CommonButton from "../components/CommonButton.vue";
import InputOtp from 'primevue/inputotp';
import { ref } from 'vue';
const value = ref(null);
</script>
<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.confirmemail {
  max-width: 460px;
}

.signup-container {
  max-width: 460px;
  padding-inline: 20px;
  margin-top: auto;
  margin-bottom: auto;

  .chngeText {
    color: $lightGray;
  }

  .emailtext {
    color: $lightGray;
    line-height: 28px;

    .emailtext a {
      color: $themeBlue;
    }
  }
}
</style>
