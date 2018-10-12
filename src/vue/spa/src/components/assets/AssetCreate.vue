<template>
    <div>
        <klink-modal-asset :params="this.$route.params" />
    </div>
</template>
<script>

    import Vue from 'vue';
    import KlinkModalAsset from 'klink-visualization-vue';
    Vue.use(KlinkModalAsset);

    export default {
        name: "asset-create",
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