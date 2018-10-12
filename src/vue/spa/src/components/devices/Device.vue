<template>

    <div class="device-container">
        <div class="info custom-row">
            <div class="info-options col-12 row">
                <router-link :to="'/app/devices/'+ device.id + '/edit'" class="col-12 col-md-6 pl-0">
                    <button class="btn btn-green">Edit</button>
                </router-link>
                <a class="col-12 col-md-6">
                    <button class="btn btn-green" v-b-modal.deleteDevice>Delete</button>
                </a>
            </div>
            <b-modal centered id="deleteDevice"
                     :title="'Device - '+ device.first_name + ' - Delete'"
                     @ok="deleteDevice"
                     ok-variant="orange"
                     cancel-variant="outline-orange">
                <p>
                    Are you sure you want to delete this Device?
                </p>
            </b-modal>
        </div>
    </div>

</template>

<script>

    export default {
        name: "device",
        components:{
        },
        data() {
            return {
                device: null
            }
        },
        methods: {
            getDevice: function() {
                klinkApi.get(api.deviceUrl + this.$route.params.id).
                then( response => {
                    this.device = response.data.data[0];
                })
            },
            deleteDevice: function () {
                klinkApi.delete(api.devicesUrl + this.device.id).
                then(response => {
                    router.push('/app/devices');
                })
            }
        },
        created() {
            this.getDevice();
        },
        watch: {
            '$route' (to, from) {
                this.getDevice();
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
