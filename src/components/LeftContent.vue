<template>
    <div class="left-section">
        <img class="left-section-img" src="../assets/images/fromlogo.svg" alt="">
    </div>
</template>
<script>
export default {
    name: "left-section"
}

</script>
<style lang="scss" scoped>
@import "../assets/mediaqueries/mediaqueries.scss";

.left-section {
    width: 50%;
    background: #384BD5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &-img {
        max-width: 100%;
        height: auto;

        @include tab768 {
            height: 100%;
        }


    }

    @include tab768 {
        height: 10vh;
        width: 100%;
        padding-block: 10px;
    }

}
</style>