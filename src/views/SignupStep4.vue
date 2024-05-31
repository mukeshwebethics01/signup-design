<template>
    <div class="flex confirmemail w-full flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <StepProgress />
            <div class="flex flex-column">
                <Title heading="Let’s Start Setting Up" subheading="Tell us little bit about you and your business" />
            </div>
            <div class="card flex justify-content-center email-inputs w-full mt-2">
                <div class="flex flex-column gap-2 emailcontainer w-full flex ">
                    <div class="flex flex-column ">
                        <label class="font-medium text-lg" for="fullName">Full name</label>
                        <InputText class="stependinput focus:shadow-none" id="fullName" v-model="fullName"
                            aria-describedby="fullName-help" placeholder="Enter your full name" />
                    </div>
                    <div class="flex flex-column  mt-2">
                        <label class="font-medium text-lg" for="companyName">Company name</label>
                        <InputText class="stependinput focus:shadow-none" id="companyName" v-model="companyName"
                            aria-describedby="companyName-help" placeholder="Enter company name" />
                    </div>
                    <div class="flex flex-column  mt-2">
                        <label class="font-medium text-lg" for="tenantURL">Tenant URL</label>
                        <div class="flex">
                            <InputText class="stependinput url-input w-full focus:shadow-none" id="tenantURL"
                                v-model="tenantURL" aria-describedby="tenantURL-help" placeholder="Enter tenant URL" />
                            <span
                                class="url-input-span border-left-none px-4 flex justify-content-center align-items-center font-medium text-base">.webethics.com</span>
                        </div>
                    </div>
                    <router-link class="no-underline" to="/signup-loader">
                        <CommonButton class="mt-3" btnText=" Complete Sign Up" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import StepProgress from '../components/StepProgress.vue';
import Title from '../components/Titles.vue';
import CommonButton from "../components/CommonButton.vue";
import { ref } from 'vue';

const fullName = ref('');
const companyName = ref('');
const tenantURL = ref('');
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";


.stependinput {
    border-radius: 6px;
}

.stependinput::placeholder {
    color: $lightGray;
}

.url-input {
    border-radius: 6px 0 0 6px;
}

.url-input-span {
    border: 1px solid $inputsborderColor;
    border-radius: 0px 6px 6px 0px;
    background: #F0F3F8;
}
</style>
