<template>
    <div class="flex flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <!-- <Steppers /> -->
            <StepProgress />
            <Title heading="Welcome to Path Loop"
                subheading="You're just a few steps away from effectively managing your business operations." />
            <div class="card flex justify-content-center email-inputs w-full">
                <div class="flex flex-column gap-2 emailcontainer w-full flex ">
                    <CommonInputs placeholder="example@example.com" />
                    <CommonButton class="mt-3" btnText="Sign Up" />
                </div>
            </div>
        </div>
        <div>
            <p class="text-center mb-6 signin-text font-medium ">Already have an account? <a href="#"
                    class="signin font-medium">Sign-in</a></p>
        </div>
    </div>
</template>

<script setup>
import StepProgress from '../../components/stepprogress/StepProgress.vue';
import Title from '../../components/titles/Titles.vue';
import CommonButton from "../../components/Buttons/CommonButton.vue";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import CommonInputs from "../../components/Inputes/CommonInputs.vue";
</script>
<style lang="scss" scoped>
@import "../../assets/mediaqueries/mediaqueries.scss";
@import "../../assets/colors/colors.scss";


.signup-container {
    max-width: 460px;
    padding-inline: 20px;
    margin-top: auto;
    margin-bottom: auto;

    @include tab768 {
        margin-top: 40px;
    }


}

.signin-text {
    color: $lightGray;
}

.signin {
    color: $themeBlue;
}
</style>
