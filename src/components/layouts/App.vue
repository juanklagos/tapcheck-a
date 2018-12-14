<template>
    <div>
        <div v-if="$auth.ready()">
            <router-view></router-view>
        </div>
        <div v-if="!$auth.ready()">
            <div id="loading" v-if="loader">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                loader: true
            }
        },
        created() {
            var _this = this;
            console.log(this.$route.path);

        }
    }
</script>

<style scoped>
    #loading {
        background-image: url("../../assets/tapcheck.png");
        background-repeat: no-repeat, repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        position: fixed;
        display: block;
        opacity: 0.8;
        background-color: #FFF;
        z-index: 9999;
        text-align: center;
        vertical-align: middle;
        animation-name: color;
        animation-duration: 500ms;
        animation-iteration-count: infinite;
    }

    @keyframes color {
        from {
            background-color: #fff;
            background-size: 350px 80px;
        }
        to {
            background-color: #97e6da;
            background-size: 360px 90px;
        }
    }

    .content-wrapper {
        background: #e6ddc5;
    }
</style>