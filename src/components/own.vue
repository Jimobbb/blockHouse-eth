<template>
    <div>
        <el-card class="box-card">
            <div class="avatar_box">
                <img src='../assets/2B.png' alt="">
            </div>

            <el-row :gutter="12" class="nameCard">
            <el-col :span="8" :offset="4">
                <el-card shadow="always">
                    <span class="username">{{this.usersList.userList[0].username}}</span>
                </el-card>
            </el-col>
            </el-row>

            <el-button type="primary" @click="nameDialogVisible = true">修改姓名</el-button>
            <el-button type="primary" @click="uploadAvatar">修改头像</el-button>
            <el-button type="primary" @click="passwordDialogVisible = true">修改密码</el-button>
            <el-button type="primary" @click="keyDialogVisible = true">查看私钥</el-button>

            <el-dialog title="修改姓名" :visible.sync="nameDialogVisible" width="50%" @close="nameDialogClosed">
                <el-form :model="nameForm" :rules="nameFormRules" ref= "nameFormRef" label-width="80px">
                    <el-form-item label="新用户名" prop="username">
                        <el-input v-model="nameForm.username"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer">
                    <el-button @click="nameDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="nameUserInfo">确 定</el-button>
                </span>
            </el-dialog>

            <el-dialog title="修改密码" :visible.sync="passwordDialogVisible" width="50%" @close="passwordDialogVisible">
                <el-form :model="passwordForm" :rules="passwordFormRules" ref= "passwordFormRef" label-width="80px">
                    <el-form-item label=新密码 prop="password">
                        <el-input v-model="passwordForm.password"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer">
                    <el-button @click="passwordDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="nameUserInfo">确 定</el-button>
                </span>
            </el-dialog>

            <el-dialog title="查看私钥" :visible.sync="keyDialogVisible" width="50%" @close="keyDialogClosed">
                <span>{{this.usersList.userList[0].username}} 的私钥是 {{this.usersList.userList[0].publicKey}}</span>
                <span slot="footer">
                    <el-button @click="keyDialogVisible = false">返 回</el-button>
                </span>
            </el-dialog>

        </el-card>

        <router-link to="/payments">
          <el-button type="primary">查看我的合约</el-button>
        </router-link>

        <router-link to="/basket">
          <el-button type="warning">Got to Basket</el-button>
        </router-link>
    </div>
    

    
    
</template>

<script>
// import users from '../data/user.js'
import userList from '../data/userList.json';


export default {
    data() {
        return {
            usersList: [],
            nameDialogVisible: false,
            keyDialogVisible: false,
            passwordDialogVisible: false,
            nameForm: {
                username: '',
            },
            passwordForm: {
                password: '',
            },
            nameFormRules: {
                username: [
                    {required: true , message: '输入用户名', trigger: 'blur'},
                    {min:3 , max: 10, message: '3到10个字符之间', trigger: 'blur'},  
                ],
            },
            passwordFormRules: {
                password: [
                    {required: true , message: '输入密码', trigger: 'blur'},
                    {min:6 , max: 15, message: '6到15个字符之间', trigger: 'blur'},  
                ],
            },
            keyForm: {
                key: '',
            },
        }
    },
    created() {
        this.usersList = userList;
        
        console.log('this.users:',this.usersList)
        console.log('the first name:',this.usersList.userList[1].password)
        console.log(this.userList.userList[1].publicKey)
    },
    methods: {
        nameDialogClosed() {
            this.$refs.resetFields()
        },
        passwordDialogClosed() {
            this.$refs.resetFields()
        },
        keyDialogClosed() {
            this.$refs.resetFields()
        },
        uploadAvatar() {

        }
    },
}
</script>

<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    position: relative;
    width: 1000px;
    height: 300px;
    margin:0 auto;
    text-align: center;
  }
  .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding :10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        // transform: translate(-50%,-50%);
        background-color: #66ccff;
        img{
            width:100%;
            height:100%;
            border-radius: 50%;
            background-color: #eeeeee;
        }
    }
  .username {
    font-size: 40px;
    font-weight: 1000;
    color: #000;
  }

  .nameCard {
    margin: 30px;
    position: relative;
  }
</style>