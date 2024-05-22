<template>
    <label for="username" class="input-label font-medium text-lg">Email</label>
    <InputText class="outline-none inputplace" id="username" v-model="value" aria-describedby="username-help"
        :placeholder="placeholder" />
</template>
<script>
import InputText from 'primevue/inputtext';
export default {
    name: "InputTextComponent",
    components: {
        InputText
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            value: ''
        };
    },
};

</script>
<style lang="scss" scoped>
@import "../../assets/colors/colors.scss";


.inputplace::placeholder {
    color: $lightGray;
}
</style>