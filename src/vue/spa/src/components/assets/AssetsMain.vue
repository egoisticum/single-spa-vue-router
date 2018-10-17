<template>
    <div class="row assets">
        <div class="col-lg-6 col-md-6 col-sm-9 col-xs-12 cta-wrapper">
            <div style="margin-left: -15px;">
                <cta :ctaTitle="'Assets'"
                     :ctaSubTitle="'Organize'"
                     :ctaDescription="'Group one or more devices into asset for easier management.'"
                     :ctaButtonText="'ADD NEW ASSET'"
                     :ctaButtonCssClass="'btn-assets'"
                     :ctaButtonHref="ctaButtonHref" />
            </div>
        </div>
        <div class="custom-row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 klink-box" v-for="asset in assets" :key="asset.id">
                <klink-card :title="asset.first_name + ' ' + asset.last_name"
                            :description="asset.description"
                            :cardItems="asset.sensors"
                            :cardIcon="ctaButtonHref.cardIcon"
                            routeName="klink-edit-assets"
                            sensorName="klink-link-device-assets"
                            modalButtonCssClass="btn-assets"
                            :id="asset.id"
                            :routePath="'/assets/link/' + asset.id"
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
        name: "main-assets",
        components: {},
        data() {
            return {
                assets: [],
                filterText: '',
                perPage: 6,
                currentPage: 1,
                ctaButtonHref: {
                    name: 'klink-add-assets',
                    modalIcon: require('../../assets/img/asset-icon.png'),
                    footerIcon: require('../../assets/img/asset-footer-icon-2.png'),
                    footerIcon2: require('../../assets/img/asset-footer-icon.png'),
                    title: 'Add new asset',
                    labelName: 'Name',
                    description: 'Description',
                    buttonText: 'Add asset',
                    modalButtonCssClass: 'btn-assets',
                    editButtonHref: '/asset/edit',
                    addSensorHref: '/asset/link/add',
                    path: '/assets/create',
                    cardIcon: require('../../assets/img/asset-card.png')
                }
            }
        },
        mounted() {
            var self = this;
            axios.get('/src/vue/spa/src/assets/api/assets.json').then(function(response) {
                if (response.data) {
                  console.log("ima");
                    self.assets = response.data.data;
                    console.log("ima ->", self.assets);
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
}</script>
<style lang="scss" scoped>
</style>
