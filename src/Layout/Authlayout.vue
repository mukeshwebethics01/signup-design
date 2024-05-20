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

<style>
.main-layout {
    display: flex;
}

.main-layout-two {
    width: 50%;
}
</style>