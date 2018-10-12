<template>

    <div>
        <klink-modal-sensor :params="this.$route.params" />
    </div>

</template>

<script>

    import Vue from 'vue';
    import KlinkModalSensor from 'klink-visualization-vue';
    Vue.use(KlinkModalSensor);

    export default {
        name: "device-sensor",
        components:{
        },
        data() {
            return {
                device: null
            }
        },
        methods: {
        },
        created() {
        }
    }
</script>