<template>
    <div class = "login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src='../assets/2B.png' alt="">
            </div>
            <!-- 登录表单 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" class="login_form">
                <el-form-item prop="username" label="用户名">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <!-- 注册和登录 -->
                <el-form-item class="buttons">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="warning" @click="addDialogVisible = true">注册</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 添加用户对话框 -->
        <el-dialog title="注册" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <el-form :model="addForm" :rules="addFormRules" ref= "addFormRef" label-width="80px">
                <el-form-item label="用户名称" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="addForm.mobile"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="registerPOST">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template> 

<script>
export default {
    data() {
        var checkEmail = (rule, value, cb) => {
            // 验证邮箱的正则表达式
            const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

            if (regEmail.test(value)) {
            // 合法的邮箱
                return cb()
            }

            cb(new Error('请输入合法的邮箱'))
        }
    
        var checkMobile = (rule, value, cb) => {
            // 验证手机号的正则表达式
            const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

            if (regMobile.test(value)) {
                return cb()
            }

            cb(new Error('请输入合法的手机号'))
        }
        return {
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            loginFormRules: {
                username:[
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                ],
            },
            addDialogVisible: false,
            addForm: {
                username: '',
                password: '',
                email: '',
                mobile: '',
            },
            addFormRules: {
                username: [
                    {required: true , message: '输入用户名', trigger: 'blur'},
                    {min:3 , max: 10, message: '3到10个字符之间', trigger: 'blur'},  
                ],
                password: [
                    {required: true , message: '输入密码', trigger: 'blur'},
                    {min:6 , max: 15, message: '6到15个字符之间', trigger: 'blur'},  
                ],
                email: [
                    {required: true , message: '输入邮箱', trigger: 'blur'},
                    {validator: checkEmail, trigger: 'blur'}
                ],
                mobile: [
                    {required: true , message: '输入手机', trigger: 'blur'},
                    {validator:checkMobile, trigger: 'blur'}
                ],
            },
        }
    },
    methods: {
        login() {
            
            // this.$refs.loginFormRef.validate(async valid => {
            //     if(!valid) return;
            //     // 和api服务器有关，及时改
            //     // 直接this后给出的结果是promise
            //     // 使用await和async组合就不会返回promise
            //     const {data: res} = await this.$http.post('login',this.loginForm);
            //     if(res.meta.status != 200) {
            //         return this.$message.error("登录失败");
            //     }
            //     this.$message.success("登陆成功");

            //     window.sessionStorage.setItem("token", res.data.token);
            //     this.$router.push("/home");
            // });
            this.$router.push("/home");
        },
        addDialogClosed() {
            this.$refs.addFormRef.resetFields()
        },
        registerPOST() {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/user',
                data: {
                    username: 'admin11123',
                    password: '112333',
                    mobile: '156132181',
                    email:'22238944430@qq.com'
                }
            }).then(response => {
                console.log('届过去了');
                console.log(response);
            })
            // this.$message.success('添加用户成功！')
            // this.addDialogVisible = false
        },
    }
}
</script>

<style lang="less" scoped>
.login_container {
    background: url("../assets/backgroundPic.png");
    // background-color: #66ccff;
    height: 100%;
    background-size: 100% 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);


    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding :10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #66ccff;
        img{
            width:100%;
            height:100%;
            border-radius: 50%;
            background-color: #eeeeee;
        }
    }

}

.buttons {
    display: flex;
    justify-content: flex-end;
}

.login_form{
    position:absolute;
    bottom: 0px;
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;
}
</style>