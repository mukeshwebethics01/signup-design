<template>
    <div>
        <h2 class="h2tag text-center font-bold">{{ heading }}</h2>
        <p class="ptag text-center text-base">{{ subheading }}</p>
    </div>
</template>
<script>
export default {
    name: 'Title',
    props: {
        heading: {
            type: String,
            required: true
        },
        subheading: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.h2tag {
    color: $themeBlue;
    font-size: 22px;
}

.ptag {
    color: $lightGray;
    line-height: 28px;

}
</style>