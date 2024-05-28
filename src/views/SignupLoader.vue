<template>
    <div class="flex confirmemail w-full flex-column h-full justify-content-between">
        <div class="signup-container flex flex-column align-items-center">
            <div class="flex flex-column">
                <Title heading="We are setting up things for you"
                    subheading="Please bear with us as we prepare everything for your convenience. This may take a few moments." />
            </div>
            <div class="flex mt-4 flex-column gap-2 emailcontainer w-full flex ">
                <div class="card">
                    <ProgressBar mode="indeterminate" class="custom-progressbar" style="height: 8px"></ProgressBar>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import 'primeicons/primeicons.css';
import ProgressBar from 'primevue/progressbar';
import Title from '../components/Titles.vue';
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

}

.custom-progressbar {
    border-radius: 25px;
}
</style>
