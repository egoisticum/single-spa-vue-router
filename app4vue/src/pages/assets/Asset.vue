<template>

    <div class="asset-container">
        <div class="info row">
            <div class="info-options col-12 row">
                <router-link :to="'/app/assets/'+ asset.id + '/edit'" class="col-12 col-md-6 pl-0">
                    <button class="btn btn-orange">Edit</button>
                </router-link>
                <a class="col-12 col-md-6" >
                    <button class="btn btn-outline-orange" v-b-modal.deleteAsset>Delete</button>
                </a>
            </div>
            <b-modal centered id="deleteAsset"
                     :title="'Asset - '+ asset.name + ' - Delete'"
                     @ok="deleteAsset"
                     ok-variant="orange"
                     cancel-variant="outline-orange">
                <p>
                    Are you sure you want to delete this Asset?
                </p>
            </b-modal>
        </div>
    </div>

</template>

<script>

    export default {
        name: "asset",
        components:{
        },
        data() {
            return {
                asset: null
            }
        },
        computed: {
            uploadsUrl() {
                return api.uploadsUrl;
            }
        },
        methods: {
            getAsset: function() {
                klinkApi.get(api.assetsUrl + this.$route.params.id).
                then( response => {
                    this.asset = response.data;
                })
            },
            deleteAsset: function () {
                klinkApi.delete(api.assetsUrl + this.asset.id).
                then(response => {
                    router.push('/app/assets');
                })
            }
        },
        created() {
            this.getAsset();
        },
        watch: {
            '$route' (to, from) {
                this.getAsset();
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
