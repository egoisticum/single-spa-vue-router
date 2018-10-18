<template>

    <div>
        <klink-modal-device :params="this.$route.params" />
    </div>

</template>

<script>

    import Vue from 'vue';
    import KlinkModalDevice from 'klink-visualization-vue';
    Vue.use(KlinkModalDevice);

    export default {
        name: "device-create",
        props:[],
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