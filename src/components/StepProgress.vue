<template>
    <div class="card steper w-full">
        <Steps :model="items" class="custom-steps" :readonly="true">
            <template #item="{ item, index }">
                <span
                    :class="['inline-flex beforline align-items-center justify-content-center align-items-center border-circle setper-circle  h-2rem w-2rem z-1 cursor-pointer']"
                    :style="{ backgroundColor: index <= activeStep ? '#384BD5' : 'white', color: index <= activeStep ? 'white' : '', border: index <= activeStep ? 'none' : '1px solid #9CA3AF' }">
                    <i :class="[getIcon(index), 'text-xs']" :style="{ opacity: index <= activeStep ? 1 : 0.2 }" />
                </span>
            </template>
        </Steps>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import Steps from 'primevue/steps';
export default {
    name: 'Steppers',
    components: {
        Steps
    },
    setup() {
        const route = useRoute();
        const items = ref([
            { icon: 'pi pi-check' },  // Default first step as checked
            { icon: 'pi pi-circle-fill' },
            { icon: 'pi pi-circle-fill' },
            { icon: 'pi pi-circle-fill' },
        ]);

        const activeStep = computed(() => {
            if (route.path === '/confirm-email') {
                return 1;
            } else if (route.path === '/signup-password') {
                return 2
            } else if (route.path === '/signup-step-4') {
                return 3
            }
            return 0;
        });

        const getIcon = (index) => {
            if (index <= activeStep.value) {
                return 'pi pi-check';
            }
            return items.value[index].icon;
        };

        return { items, activeStep, getIcon };
    }
};

</script>

<style lang="scss">
@import "../assets/mediaqueries/mediaqueries.scss";

.steper {
    margin-bottom: 90px;
    max-width: 266px;

    @include tab768 {
        margin-bottom: 45px;
    }
}

.custom-steps {
    .p-steps-item {
        overflow: visible;

        &:first-child {
            span:before {
                content: none;
            }
        }
    }
}

.beforline {
    position: relative;
    z-index: 5 !important;

    &::before {
        content: " ";
        border-top: 1px solid #dee2e6;
        width: 36px;
        top: 50%;
        left: -35px;
        display: block;
        position: absolute;
        transform: translateY(-50%);
    }
}
</style>
