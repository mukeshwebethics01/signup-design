<template>
    <!-- <SignUp/> -->
    <div class="main-layout flex flex-row">

        <LeftContent />
        <div class="main-layout-two w-6 flex justify-content-center align-items-center">
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


    @include tab768 {
        flex-direction: column !important;
        align-items: center;
    }
}

.main-layout-two {
    @include tab768 {
        width: 100% !important;
        height: 100vh;
    }
}
</style>