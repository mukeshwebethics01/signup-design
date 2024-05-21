<template>
    <!-- <SignUp/> -->
    <div class="main-layout">

        <LeftContent />
        <div class="main-layout-two">
            <router-view />
        </div>
    </div>
</template>
<script>
// import SignUp from '@/views/SignUp.vue';
import LeftContent from "../components/LeftContent.vue"
export default {
    name: "Layout",
    components: {
        LeftContent,
    }
}


</script>

<style lang="scss" scoped>
@import "../assets/mediaqueries/mediaqueries.scss";

.main-layout {
    display: flex;
    flex-direction: row;

    @include tab768 {
        flex-direction: column !important;


    }
}

.main-layout-two {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include tab768 {
        width: 100%;
    }
}
</style>