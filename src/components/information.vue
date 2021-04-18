<template>
    <div>
         <!-- 推荐房源分割线 -->
        <div class="tableTitle">
            <span class="midText">推荐房源</span>
        </div>
        <!-- 推荐房源图片：限6个 -->

        <el-row :gutter="24">
            <el-col :span="6" :offset="2">
                <el-card :body-style="{ padding: '5px' }">
                <img src = 'https://raw.githubusercontent.com/Jimobbb/blockHouse/main/house1.png' class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[0].name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-card :body-style="{ padding: '5px' }">
                <img src='https://raw.githubusercontent.com/Jimobbb/blockHouse/main/house1.png' class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[1].name}}</span>
                    <span>介绍</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-card :body-style="{ padding: '5px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[2].name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="2"><div class="grid-content bg-purple"></div>
                <el-card :body-style="{ padding: '5px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[3].name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="1"><div class="grid-content bg-purple"></div>
                <el-card :body-style="{ padding: '5px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[4].name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="1"><div class="grid-content bg-purple"></div>
                <el-card :body-style="{ padding: '5px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 18px;">
                    <span>{{houseBest[5].name}}</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" size="mini">查看更多</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import houseBest from '../data/house'

export default {
    data() {
    return {
        inputSearch: '',
        houseBest: [],
        }
    },
    created() {
      this.houseBest = houseBest;
      console.log("来一下",this.houseBest)
    },
    methods: {
       
    }
}
</script>

<style lang="less" scoped>
.button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-row {
    margin-bottom: 0px;
  }

  .tableTitle {
    position: relative;
    margin: 50px auto;
    width: 800px;
    height: 5px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 30px;
    color: rgba(101, 101, 101, 1);
  }
  .midText {
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>