<template>
    <div class="flex confirmemail w-full flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <img src="../assets/images/rocket.svg" alt="">
            <div class="flex flex-column mt-4">
                <Title heading="You are all set up?"
                    subheading="Enjoy Path Loop and let us know if you have any questions" />
            </div>
            <div class="card flex justify-content-center email-inputs w-full mt-4">
                <Button class="gap-2 w-full flex justify-content-center loading-btn border-none" label="Submit"> <i
                        class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>Let’s start</Button>
            </div>
        </div>
    </div>
</template>
<script setup>
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
import Title from '../components/Titles.vue';
import { ref } from 'vue';
const value = ref(null);
// import "../assets/images/rocket.svg"
</script>
<style lang="scss" scoped>
@import "../assets/colors/colors.scss";


.loading-btn {
    background: $themeBlue ;
    border-radius: 6px;

}
</style>
