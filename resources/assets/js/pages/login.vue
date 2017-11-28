<template>
    <div class="login-page">
        <Row type="flex" justify="center" align="middle" class="login-page-con">
            <Col span="6">
                <Card>
                    <login-form></login-form>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import loginForm from '../components/form/login/loginForm'

    export default {
        components: {
            loginForm
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .login-page {
        height: 100%;
        .login-page-con {
            height: 100%;
            transform: translateY(-10%);
        }
    }
</style>