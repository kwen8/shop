<template>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="user">
            <Input type="text" v-model="formCustom.user" />
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formCustom.password" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            const validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback()
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback()
                }
            };
            return {
                formCustom: {
                    user: '',
                    password: ''
                },
                ruleCustom: {
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('login', this.formCustom).then(res => {
                            this.$Message.success('登录成功!')
                            this.$router.push({name: 'home'})
                        }).catch(error => {
                            this.$Message.error(error.response.data.message);
                        })
                    } else {
                        this.$Message.error('请完整填写表单');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
