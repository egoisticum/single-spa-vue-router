<template>
    <div>
        <klink-modal-link-device :params="this.$route.params" />
    </div>
</template>
<script>

    import Vue from 'vue';
    import KlinkModalLinkDevice from 'klink-visualization-vue';
    Vue.use(KlinkModalLinkDevice);

    export default {
        name: "asset-link-device",
        components: {
        },
        data() {
            return {
                asset: null
            }
        },
        methods: {
        },
        created() {
        }
    }
</script>