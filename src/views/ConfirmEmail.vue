<template>


  <div class="flex confirmemail flex-column h-full justify-content-between">
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
      <a href="#"></a>
      <div class="card flex justify-content-center email-inputs w-full">
        <div class="flex flex-column gap-2 emailcontainer w-full flex ">
          <div class="card flex justify-content-center gap-2">
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
            <InputText class="confirm-input" placeholder="-" type="text" v-model="value" />
          </div>
          <CommonButton class="mt-3" btnText="Confirm" />
        </div>
      </div>

    </div>
  </div>

  <!-- <div class="flex flex-column align-items-center ">
    <span class="flex align-items-center justify-content-center gap-2"> <i class="pi pi-arrow-left "></i>Change Email
      Address</span>
    <StepProgress />
    <Title heading="Confirm your email" subheading="We’ve sent a code to your email: example@exam.com" />
    <div class="card flex justify-content-center gap-2">
      <InputText class="confirm-input" type="text" v-model="value" />
      <InputText class="confirm-input" type="text" v-model="value" />
      <InputText class="confirm-input" type="text" v-model="value" />
      <InputText class="confirm-input" type="text" v-model="value" />
      <InputText class="confirm-input" type="text" v-model="value" />
      <InputText class="confirm-input" type="text" v-model="value" />
    </div>

    <CommonButton btnText="Confirm" />
  </div> -->
</template>
<script setup>
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import StepProgress from '../components/StepProgress.vue'
import Title from '../components/Titles.vue';
import CommonButton from "../components/CommonButton.vue";
// import CommonInputs from "../components/CommonInputs.vue";
import { ref } from 'vue';

const value = ref(null);
</script>
<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.confirmemail {
  max-width: 460px;
  width: 100%;
}


.confirm-input {
  height: 40px;
  width: 40px;
  padding-top: 18px;

  &::placeholder {
    padding-left: 5px;
    color: #D1D5DB;

  }

  &:focus {
    box-shadow: none;
  }
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
