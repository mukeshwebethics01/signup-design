<template>
    <div class="card steper w-full ">
        <Steps :model="items" class="custom-steps" :readonly="true">
            <template #item="{ item, active }">
                <span
                    :class="['inline-flex align-items-center justify-content-center align-items-center border-circle setper-circle border-1 h-2rem w-2rem z-1 cursor-pointer']"
                    :style="{ backgroundColor: active ? '#384BD5' : 'white', color: active ? 'white' : '', border: active ? 'none' : '1px solid #9CA3AF' }">
                    <i :class="[item.icon, 'text-xs ']" :style="{ opacity: active ? 1 : 0.2 }" />
                </span>
            </template>
        </Steps>
    </div>
</template>
<script>
import { ref } from 'vue';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import Steps from 'primevue/steps';

export default {
    name: 'Steppers',
    components: {
        Steps
    },
    setup() {
        const items = ref([
            { icon: 'pi pi-check' },
            { icon: 'pi pi-circle-on' },
            { icon: 'pi pi-circle-fill' },
            { icon: 'pi pi-circle-fill' }
        ]);

        return { items };
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/mediaqueries/mediaqueries.scss";

.steper {
    margin-bottom: 90px;
    max-width: 266px;

    @include tab768 {
        margin-bottom: 45px;
    }
}
</style>