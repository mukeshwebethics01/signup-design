<template>
    <div class="left-section w-6 flex justify-content-center align-items-center h-screen">
        <img class="left-section-img max-w-full h-auto" src="../assets/images/fromlogo.svg" alt="">
    </div>
</template>
<script>
export default {
    name: "left-section"
}
</script>
<style lang="scss" scoped>
@import "../assets/mediaqueries/mediaqueries.scss";
@import "../assets/colors/colors.scss";

.left-section {
    background: $themeBlue;

    @include tab768 {
        display: none !important;
    }
}
</style>