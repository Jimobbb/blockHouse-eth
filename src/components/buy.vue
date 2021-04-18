<template>
    <div>
        <div class="search">
            <div class="inputSearch">
                <el-input placeholder="按id查询想要交易的房产" v-model="idName" style="width:600px" @input="searchNew()"></el-input>
                <el-button type="warning" @click="buy">确认交易</el-button>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            idName: '',
            url: 'http://localhost:3000/data/',
            newURL: '',
            buyDialogVisible: false,
        }
    },
    methods: {
        buyDialogClosed() {
            this.$refs.resetFields()
        },
        buy() {
            console.log('delete number', this.idName),
            this.newURL = this.url + this.idName,
            console.log('newURL', this.newURL),
            axios({
                method: 'DELETE',
                url: this.newURL,
            }).then(response => {
                console.log('删除完事了');
                console.log(response);
            })
        }
    }
}
</script>

<style lang="less" scoped>
.search {
      position: relative;
      width: 100%;
      height: 400px;
      background: url("../assets/backgroundPic.png");
      background-size: 100% 100%;
  }

.inputSearch{
      position: relative;
      top:50%;
      display: flex;
      left: 30%;
  }
  
.el-dialog{
    width: 800px;
    height: 500px;
}
</style>

