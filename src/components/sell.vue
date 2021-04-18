<template>
    <div>
        <div class="search">
            <el-button @click="GET">GET</el-button>
            <el-button @click="POST">发布房源</el-button>
            <el-button @click="PUT">PUT</el-button>
            <el-button @click="DELETE">DELETE</el-button>
            <el-button @click="check">check</el-button>
            <el-button @click="testURL">URL</el-button>
        </div>

        

        <el-form ref="house" :model="house" label-width="80px">
            <el-form-item label="房屋介绍">
                <el-input v-model="house.title"></el-input>
            </el-form-item>
            <el-form-item label="社区">
                <el-input v-model="house.community_name"></el-input>
            </el-form-item>
            <el-form-item label="租法">
                <el-input v-model="house.rent_type"></el-input>
            </el-form-item>
            <el-form-item label="区-街道-社区">
                <el-input v-model="house.content"></el-input>
            </el-form-item>
            <el-form-item label="面积">
                <el-input v-model="house.space"></el-input>
            </el-form-item>
            <el-form-item label="朝向">
                <el-input v-model="house.head"></el-input>
            </el-form-item>
            <el-form-item label="运营商">
                <el-input v-model="house.brand"></el-input>
            </el-form-item>
            <el-form-item label="房屋户型">
                <el-input v-model="house.house_type"></el-input>
            </el-form-item>
            <el-form-item label="租住规则">
                <el-input v-model="house.guarantee_ways"></el-input>
            </el-form-item>
            <el-form-item label="近地铁">
                <el-input v-model="house.metro_location"></el-input>
            </el-form-item>
            <el-form-item label="楼层位置">
                <el-input v-model="house.relative_position"></el-input>
            </el-form-item>
            <el-form-item label="楼层（数字）">
                <el-input v-model="house.height"></el-input>
            </el-form-item>
        </el-form>
        
    <!-- <el-button @click="Deleteeee">DELETE</el-button> -->
    </div>
    
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return {
            url: 'http://localhost:3000/' + 'data',
            house: {
                title: '',
                community_name: '',
                rent_type: '',
                content: '',
                space: '',
                head: '',
                house_type: '',
                brand: '',
                rental: 0,
                guarantee_ways: '',
                metro_location: '',
                relative_position: '',
                height: 0
            }
        }
    },

    
    methods:{
        GET(){
            console.log('yes');
            axios.request({
                method: 'GET',
                url: 'http://localhost:3000/data/',
            }).then(response => {
                console.log(response);
                this.getMessage = response;
            })
        },
        POST() {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/data',
                data: {
                    title: this.house.title,
                    community_name: this.house.community_name,
                    rent_type: this.house.rent_type,
                    content: this.house.content,
                    space: this.house.space,
                    head: this.house.head,
                    house_type: this.house.house_type,
                    brand: this.house.brand,
                    rental: this.house.rental,
                    guarantee_ways: this.house.guarantee_ways,
                    metro_location: this.house.metro_location,
                    relative_position: this.house.relative_position,
                    height: this.house.height
                }
            }).then(response => {
                console.log('届过去了');
                console.log(response);
            })
        },
        PUT() {
            axios({
                method: 'PUT',
                url: 'http://localhost:3000/data/0',
                data: {
                    title:"整租·金阳易诚国际 2室2厅 南",
                    space: "129"
                }
            }).then(response => {
                console.log('更新完事了');
                console.log(response);
            })
        },
        DELETE() {
            axios({
                method: 'DELETE',
                url: 'http://localhost:3000/data/13',
            }).then(response => {
                console.log('删除完事了');
                console.log(response);
            })
        },
        check() {
            console.log("house:",this.house)
        },
        testURL() {
            console.log('url:',this.url)
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

.el-form-item {
    padding: 10px;
}
</style>