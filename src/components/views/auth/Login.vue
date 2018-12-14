<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
            <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auto-form-wrapper">
                            <form autocomplete="off" @submit.prevent="logins">
                                <center>
                                    <img src="../../../assets/tapcheck.png" width="200px"/>
                                </center>
                                <br>
                                <div class="form-group">
                                    <label class="label">Usuario</label>
                                    <div class="input-group">
                                        <input type="text" id="username" v-model="username" class="form-control"
                                               placeholder="Username">
                                        <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="label">Contraseña</label>
                                    <div class="input-group">
                                        <input type="password" id="password" v-model="password" class="form-control"
                                               placeholder="*********">
                                        <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary submit-btn btn-block">Iniciar
                                        Sesión
                                    </button>
                                </div>
                                <div class="form-group d-flex justify-content-between">
                                    <div class="form-check form-check-flat mt-0">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" checked> Recordar datos
                                        </label>
                                    </div>
                                    <a href="#" class="text-small forgot-password text-black">Olvide mi
                                        contraseña</a>
                                </div>
                                <!-- <div class="text-block text-center my-3">
                                     <span class="text-small font-weight-semibold">Not a member ?</span>
                                     <a href="register.html" class="text-black text-small">Create new account</a>
                                 </div>-->
                            </form>
                        </div>
                        <ul class="auth-footer">
                            <li>
                                <a href="#">Conditions</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                        </ul>
                        <p class="footer-text text-center">copyright © 2018 Tapcheck. Dev Juan Carlos Alvarez.</p>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>


</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: null,
                password: null,
                error: false
            }
        },
        mounted() {
        },
        methods: {
            logins() {
                var app = this;
                this.$auth.login({
                    params: {
                        username: app.username,
                        password: app.password
                    },
                    fetchUser: true,
                    rememberMe: true,
                    success: function (resp) {
                        console.log(resp);
                        this.$auth.token(null, resp.data.token);

                        const token = this.$auth.token();
                        console.log('login success', resp, token);
                        /*  console.log(resp.data.access_token);
                          this.$auth.user(resp.data.access_token);*/
                    },
                    error: function (resp) {
                        console.log(resp);
                        // alert(resp)
                    },
                    //redirect: '/dashboard',

                });
            },
        }
    }
</script>

<style scoped>

</style>
