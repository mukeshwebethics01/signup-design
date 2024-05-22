<template>
    <div class="card flex justify-content-center">
        <Button class="btn w-full flex justify-content-center border-none gap-2" label="Submit">{{ btnText }} <i
                class="pi pi-arrow-right"></i></Button>
    </div>
</template>
<script>
import Button from 'primevue/button';
export default {
    name: "button",
    components: {
        Button

    },
    props: {
        btnText: {
            type: String,
            required: true,

        }
    }
}

</script>
<style lang="scss" scoped>
@import "../../assets/colors/colors.scss";

.btn {
    background: $themeBlue;
}
</style>