<template>
    <div>
        <!-- 主页搜索栏 -->
        <div class="search">
            <el-button @click="smallToBig">售价从小到大的排序</el-button>
            <el-button @click="bigToSmall">售价从大到小的排序</el-button>
            <div class="inputSearch">
                <el-input placeholder="搜索您感兴趣的房源" v-model="inputSearch" style="width:600px" @input="searchNew()">
                <el-button slot="append" icon="el-icon-search" @click="sortByKey()"></el-button>
                </el-input>
            </div>
        </div>


        <div v-if="searchResult.length > 0">
            <div v-for="item of searchResult" :key="item.rental">
                <el-card class="houseInfo">
                    <!-- <img :src="item.img" :alt="item.course_name" /> -->
                    <h1>房屋信息 : {{ item.title }}</h1>
                    <h3>售价： {{item.rental}} /月</h3> 
                    <h3>地址: {{item.content}}</h3>
                    <h3>面积: {{item.space}}</h3>
                    <h3>编号: {{item.index}}</h3>
                </el-card>
            </div>
        </div>

        <el-card v-else class="box-card">
            <div>
                未搜索到房源
            </div>
        </el-card>
    </div>
</template>

<script>
import courseData from '../data/houseList.js'
import houseData from "../data/rent_data_new.json";

export default {
  data() {
    return {
        inputSearch: '',
        courseData,
        searchResult: [],
        houseData: []
    }
  },
  created() {
      this.courseData = courseData;
      this.houseData = houseData;
      console.log("houseData", this.houseData)
  },

  methods: {
      search() {
          this.$router.push("/find");
      },

      bigToSmall() {
        this.searchResult.sort(function(a,b){
          return b.rental - a.rental
        })
      },

      smallToBig() {
        this.searchResult.sort(function(a,b){
          return a.rental - b.rental
        })
      },

      searchNew() {
        const inputValue = this.inputSearch;
        // let i = 1;
        this.searchResult = this.houseData.filter((item) => {
            if(item.content.includes(inputValue)){
                return item;
            }
            // i = i + 1
            // console.log("item",i,"+",item)
        })
        console.log('searchResult', this.searchResult)
        // console.log('users', this.searchResult)
        this.searchResult.sort(function(a,b){
          return b.rental - a.rental
        })
        // console.log('new users', this.searchResult)
      }
  }
}
</script>

<style  lang="less" scoped>
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

  .search {
      position: relative;
      width: 100%;
      height: 400px;
      background: url("../assets/backgroundPic.png");
      background-size: 100% 100%;
  }

  .input-with-select{
    background-color: #fff;
  }

  .inputSearch{
      position: relative;
      top:50%;
      display: flex;
      padding: 0 600px;
      opacity: .9;
  } 

  .box-card {
      width: 1000px;
      text-align: center;
      display:table;
      margin:0 auto;
      margin-top: 50px;
      font-size: 30px;
  }

  .houseInfo {
      width: 1000px;
      text-align: center;
      display: table;
      margin: 0 auto;
      margin-top: 50px;
  }
</style>