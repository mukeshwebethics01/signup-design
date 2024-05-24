<template>


    <div class="flex confirmemail w-full flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <Steppers />
            <StepProgress />
            <div class="flex flex-column">
                <Title heading="Setup Your Password" subheading="Just enter your secure password" />

            </div>
            <a href="#"></a>
            <div class="card flex justify-content-center email-inputs w-full">
                <div class="flex flex-column gap-2 emailcontainer w-full flex ">
                    <div class="card flex justify-content-center">
                        <Password v-model="value" toggleMask />
                    </div>
                    <CommonButton class="mt-3" btnText="Save" />
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
