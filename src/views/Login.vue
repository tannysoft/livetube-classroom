<template>
  <div id="app" class="page-container">
    <!-- Page Inner -->
    <div class="page-inner login-page">
        <div id="main-wrapper" class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-3 login-box">
                    <h4 class="login-title">Sign in</h4>
                    <form>
                        <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=226599366326-eba4ggrrl2hr2tf5sa4nl9p18ju37bi7.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto" class="btn btn-primary btn-google"><i class="fa fa-google"></i> Login with Google</a>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <a href="index.html" class="btn btn-primary btn-login">Login</a>
                        <a href="register.html" class="btn btn-default">Register</a><br>
                        <a href="index.html" class="forgot-link">Forgot password?</a>
                    </form>
                </div>
            </div>
        </div>
    </div><!-- /Page Content -->
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
    .btn-google {
        margin-bottom: 15px;
    }
    .btn-login {
        margin-right: 10px;
    }
</style>
