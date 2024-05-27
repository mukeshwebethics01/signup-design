    <template>
        <div class="flex flex-column h-full justify-content-between">
            <div class="signup-container flex flex-column align-items-center">
                <StepProgress />
                <Title heading="Welcome to Path Loop"
                    subheading="You're just a few steps away from effectively managing your business operations." />
                <div class="card flex justify-content-center email-inputs w-full">
                    <div class="flex flex-column gap-2 emailcontainer w-full flex ">
                        <CommonInputs placeholder="example@example.com" />
                        <router-link class="no-underline" to="/confirm-email">
                            <CommonButton class="mt-3" btnText="Sign Up" />
                        </router-link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </template>

<script setup>
import StepProgress from '../../components/StepProgress.vue'
import Title from '../../components/Titles.vue';
import CommonButton from "../../components/CommonButton.vue";
import Footer from "../../components/Footer.vue"
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import CommonInputs from "../../components/CommonInputs.vue";
</script>
<style lang="scss" scoped>
@import "../../assets/mediaqueries/mediaqueries.scss";
@import "../../assets/colors/colors.scss";

.signup-container {
    max-width: 460px;
    padding-inline: 20px;
    margin-top: auto;
    margin-bottom: auto;
}
</style>
