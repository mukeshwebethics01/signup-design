<template>
    <div class="signup-container">
        <div class="card steper ">
            <Steps :model="items" class="custom-steps" :readonly="false">
                <template #item="{ item, active }">

                    <span
                        :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-gray-500 border-1 h-2rem w-2rem z-1 cursor-pointer', { 'bg-blue-600 text-white': active, 'surface-overlay text-gray-500 ': !active }]">
                        <i :class="[item.icon, 'text-sm ']" />
                    </span>
                </template>
            </Steps>
        </div>
        <h2 class="h2tag">Welcome to Path Loop</h2>
        <p class="ptag">You're just a few steps away from effectively managing your business operations.</p>
        <div class="card flex justify-content-center email-inputs">
            <div class="flex flex-column gap-2 emailcontainer">
                <label for="username" class="input-label">Email</label>
                <InputText id="username" v-model="value" aria-describedby="username-help"
                    placeholder="example@example.com" />
                <div class="card flex justify-content-center">
                    <Button class="btn" label="Submit">Sign Up <i class="pi pi-arrow-right"></i></Button>
                </div>
            </div>
        </div>
        <div>
            <p>Already have an account? <a href="#">Sign-in</a></p>
        </div>
    </div>

</template>

<script setup>

import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";

import Steps from 'primevue/steps';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

const items = ref([
    {
        icon: 'pi pi-check'
    },
    {
        icon: 'pi pi-check'
    },
    {
        icon: 'pi pi-check'
    },
    {
        icon: 'pi pi-check'
    }
]);
</script>

<style lang="scss" scoped>
@import "../assets/mediaqueries/mediaqueries.scss";

.signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 460px;
    padding-inline: 10px;

    @include tab768 {
        margin-top: 40px;
    }

    .email-inputs {
        margin-bottom: 100px;
    }

    .h2tag {
        color: #384BD5;
        font-weight: 700;
        size: 22px;
        line-height: 28.64px;
        text-align: center;
    }

    .ptag {
        color: #696C71;
        line-height: 28px;
        text-align: center;
        padding-top: 10px;
    }

    .email-inputs {
        width: 100%;
    }

    .btn {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 16px;
        background: #384BD5;
        border: none;
        margin-top: 24px;
        &:hover {
            background: #0e24cc;
        }
    }
}
.emailcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-label {
        font-size: 18px;
        font-weight: 500;
        color: black;
    }
}
.steper {
    width: 100%;
    margin-bottom: 90px;
}

</style>
