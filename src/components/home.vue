<template>
    <el-container>
        <el-header>
            <img src="../assets/logo.png" alt="" class="imgTop">
            <span class="title">链租房</span>
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1" @click="toWelcome">首页</el-menu-item>
                <el-menu-item index="2" @click="toInformation">数据中心</el-menu-item>
                <el-menu-item index="3" @click="toOwn">个人中心</el-menu-item>
                <el-menu-item index="4" @click="toSell">去售房</el-menu-item>
                <el-menu-item index="5" @click="toBuy">去租房</el-menu-item>
                <el-menu-item index="6" @click="logout">注销</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <div class="bottom">
                Copyright© 2021 | Author <a class="authorLink" href="https://github.com/Jimobbb">Jimobbb</a> | All Rights Reserved | Power by <a class="vueLink" href="javascript:;">Vue</a> & <a class="vueLink" href="https://ethereum.org">Ethereum</a>
            </div>           
        </el-footer>
    </el-container>
</template>



<script>
export default {
    methods: {
        logout() {
            window.sessionStorage.clear();
            this.$router.push("/login");
        },
        toOwn() {
            this.$router.push("/own");
        },
        toWelcome() {
            this.$router.push("/welcome");
        },
        toInformation() {
            this.$router.push("/information");
        },
        toSell() {
            this.$router.push("/sell");
        },
        toBuy() {
            this.$router.push("/buy");
        }
    }
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
}

.el-main {
    background-color: whitesmoke
}

.el-container {
    height: 100%;
}

.el-footer {
    font-size: 15px;
    height: 1000px;
}

.imgTop {
    height: 70%;
}

.title {
    font-size: 30px;
}

.toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align :center;
    letter-spacing: 0.4em;
    cursor:pointer;
}

.bottom {
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: #777777;
    background-color: #000000;
    border-top: 1px solid #444;
    .authorLink {
        color: #f36
    }
    .vueLink {
        color: #42b983;
    }
}

</style>