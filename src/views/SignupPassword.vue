<template>
    <div class="flex confirmemail w-full flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <Steppers />
            <StepProgress />
            <div class="flex flex-column">
                <Title heading="Setup Your Password" subheading="Just enter your secure password" />
            </div>
            <a href="#"></a>
            <div class="card mt-2 flex justify-content-center email-inputs w-full">
                <div class="flex flex-column gap-2 emailcontainer w-full flex">
                    <div class="card flex align-items-center justify-content-center">
                        <div class="flex flex-column w-full">
                            <label class="font-medium" for="password">Password</label>
                            <Password class="password-input" id="password" v-model="password" toggleMask
                                placeholder="Password" />
                        </div>
                    </div>
                    <div class="flex flex-column w-full mt-4">
                        <label class="font-medium" for="confirmpassword">Confirm password</label>
                        <Password class="password-input" id="confirmpassword" v-model="confirmPassword" toggleMask
                            :feedback="false" placeholder="Confirm password" />
                    </div>
                    <router-link class="no-underline" to="/signup-step-4">
                        <CommonButton class="mt-5" btnText="Save" />
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
import Password from 'primevue/password';
// import InputText from 'primevue/inputtext';
import { ref } from 'vue';
const password = ref(null);
const confirmPassword = ref(null);
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

    .password-input:focus {
        box-shadow: none;
    }
}
</style>
