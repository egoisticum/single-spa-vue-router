<template>
    <div class="row devices">
        <div class="col-lg-6 col-md-6 col-sm-9 col-12 cta-wrapper">
            <div style="margin-left: -15px;">
                <cta :ctaTitle="'Devices'"
                     :ctaSubTitle="'Manage'"
                     :ctaDescription="'Start streaming data from a new device.'"
                     :ctaButtonText="'ADD NEW DEVICE'"
                     :ctaButtonCssClass="'btn-devices'"
                     :ctaButtonHref="ctaButtonHref" />
            </div>
        </div>
        <div class="custom-row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 klink-box" v-for="device in devices" :key="device.id">
                <klink-card :title="device.first_name + ' ' + device.last_name"
                            :description="device.description"
                            :cardItems="device.items"
                            :cardIcon="ctaButtonHref.cardIcon"
                            iconClass="fa fa-wifi deviceIcon"
                            routeName="klink-edit-devices"
                            sensorName="klink-sensor-devices"
                            modalButtonCssClass="btn-devices"
                            :id="device.id"
                            :imgSrc="ctaButtonHref.modalIcon"
                            :footerIcon="ctaButtonHref.footerIcon"
                            :footerIcon2="ctaButtonHref.footerIcon2" />
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
        name: "main-devices",
        components: {},
        data() {
            return {
                devices: [],
                filterText: '',
                perPage: 6,
                currentPage: 1,
                ctaButtonHref: {
                    name: 'klink-add-devices',
                    modalIcon: require('../../assets/img/device-icon.png'),
                    footerIcon: require('../../assets/img/device-footer-icon.png'),
                    footerIcon2: require('../../assets/img/device-footer-icon-2.png'),
                    title: 'Add new device',
                    labelName: 'Name',
                    description: 'Description',
                    buttonText: 'Add device',
                    modalButtonCssClass: 'btn-devices',
                    editButtonHref: '/device/edit',
                    addSensorHref: '/devices/sensor/add',
                    path: '/devices/create',
                    cardIcon: require('../../assets/img/list-bullet.png')
                }
            }
        },
        mounted() {
            var self = this;
            axios.get('/src/vue/spa/src/assets/api/devices.json').then(function(response) {
                if (response.data) {
                    self.devices = response.data.data;
                    console.log("ima ->");
                    console.log(self.devices);
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
}
</script>
<style lang="scss" scoped>
</style>
