<template>
    <div class="flex flex-column">
        <label for="email" class="input-label font-medium text-lg">Email</label>
        <InputText class="outline-none inputplace" id="email" v-model="value" aria-describedby="username-help"
            :placeholder="placeholder" />
    </div>
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
@import "../assets/colors/colors.scss";

.inputplace {
    border-radius: 6px;
}

.inputplace::placeholder {
    color: $lightGray;
}

.inputplace:focus {
    box-shadow: none;
}
</style>