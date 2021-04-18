import Vue from 'vue'
import Vuex from 'vuex'
import houseData from "./data/rent_data_new.json"

Vue.use(Vuex)

export default new Vuex.Store({
  // state同组件中的data类型存数据
  state: {
    contract: '',
    // house: houseData,
    house: [
        {
          "index": 0,
          "title": "整租·金阳易诚国际 2室2厅 南",
          "community_name": "金阳易诚国际",
          "rent_type": "整租",
          "content": "青羊-外光华-金阳易诚国际",
          "space": "74",
          "head": "南",
          "house_type": "2室2厅1卫",
          "brand": null,
          "rental": 2300.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "中楼层",
          "height": 22.0
      },
      {
          "index": 1,
          "title": "合租·保利学府城 5居室 跃层 东南卧",
          "community_name": "保利学府城",
          "rent_type": "合租",
          "content": "金牛-国宾-保利学府城",
          "space": "18",
          "head": "东南卧",
          "house_type": "5室1厅3卫",
          "brand": "芮米公寓",
          "rental": 800.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "低楼层",
          "height": 31.0
      },
      {
          "index": 2,
          "title": "整租·万科第五城四期 3室2厅 南",
          "community_name": "万科第五城四期",
          "rent_type": "整租",
          "content": "双流-蛟龙港-万科第五城四期",
          "space": "78",
          "head": "南",
          "house_type": "3室2厅1卫",
          "brand": "链家",
          "rental": 1900.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "低楼层",
          "height": 22.0
      },
      {
          "index": 3,
          "title": "合租·美年广场美岸 4居室 东南卧",
          "community_name": "美年广场美岸",
          "rent_type": "合租",
          "content": "高新-新会展-美年广场美岸",
          "space": "15",
          "head": "东南卧",
          "house_type": "4室1厅2卫",
          "brand": "像素公寓",
          "rental": 880.0,
          "guarantee_ways": "押一付一",
          "metro_location": null,
          "relative_position": "低楼层",
          "height": 29.0
      },
      {
          "index": 4,
          "title": "整租·绿地中心468 1室1厅 西北",
          "community_name": "绿地中心468",
          "rent_type": "整租",
          "content": "锦江-三圣乡-绿地中心468",
          "space": "48",
          "head": "西北",
          "house_type": "1室1厅1卫",
          "brand": "链家",
          "rental": 2000.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "高楼层",
          "height": 23.0
      },
      {
          "index": 5,
          "title": "整租·皇冠湖壹号 3室1厅 南",
          "community_name": "皇冠湖壹号",
          "rent_type": "整租",
          "content": "龙泉驿-龙泉驿城区-皇冠湖壹号",
          "space": "90",
          "head": "南",
          "house_type": "3室1厅1卫",
          "brand": "WOWO公寓",
          "rental": 2300.0,
          "guarantee_ways": "押一付一",
          "metro_location": null,
          "relative_position": "低楼层",
          "height": 32.0
      },
      {
          "index": 6,
          "title": "整租·金河谷五期 3室2厅 南",
          "community_name": "金河谷五期",
          "rent_type": "整租",
          "content": "温江-光华大道沿线-金河谷五期",
          "space": "89",
          "head": "南",
          "house_type": "3室2厅2卫",
          "brand": null,
          "rental": 1700.0,
          "guarantee_ways": null,
          "metro_location": null,
          "relative_position": "高楼层",
          "height": 34.0
      },
      {
          "index": 7,
          "title": "整租·绿地中心468 1室1厅 东北",
          "community_name": "绿地中心468",
          "rent_type": "整租",
          "content": "锦江-三圣乡-绿地中心468",
          "space": "42",
          "head": "东北",
          "house_type": "1室1厅1卫",
          "brand": "链家",
          "rental": 2500.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "高楼层",
          "height": 23.0
      },
      {
          "index": 8,
          "title": "整租·融创香璟台西苑一期 4室2厅 东南",
          "community_name": "融创香璟台西苑一期",
          "rent_type": "整租",
          "content": "高新-中德-融创香璟台西苑一期",
          "space": "151",
          "head": "东南",
          "house_type": "4室2厅2卫",
          "brand": null,
          "rental": 4400.0,
          "guarantee_ways": null,
          "metro_location": null,
          "relative_position": "中楼层",
          "height": 29.0
      },
      {
          "index": 9,
          "title": "整租·誉峰三期 2室2厅 东",
          "community_name": "誉峰三期",
          "rent_type": "整租",
          "content": "高新-金融城-誉峰三期",
          "space": "78",
          "head": "东",
          "house_type": "2室2厅1卫",
          "brand": "链家",
          "rental": 4800.0,
          "guarantee_ways": null,
          "metro_location": "近地铁",
          "relative_position": "中楼层",
          "height": 32.0
      },
      {
          "index": 10,
          "title": "整租·晶宝维吉尼亚 2室1厅 东南",
          "community_name": "晶宝维吉尼亚",
          "rent_type": "整租",
          "content": "郫都-红光-晶宝维吉尼亚",
          "space": "82",
          "head": "东南",
          "house_type": "2室1厅1卫",
          "brand": "链家",
          "rental": 1500.0,
          "guarantee_ways": null,
          "metro_location": null,
          "relative_position": "中楼层",
          "height": 18.0
      },
    ],
    fruits:[
        {
            name: 'Apple',
            description: 'An apple a day keeps the doctor away.',
            price:'8',
            image:'apple.jpg',
            units: 0
        },
        {
            name:'Orange',
            description:'Oranges are low in calories and full of nutrients, they promote clear, healthy and skin.',
            price:'0.019',
            image:'orange.jpg',
            units: 0
        },
        {
            name:'Banana',
            description:'Bananas are one of the most widely consumed fruits in the world for good reason.',
            price:'0.015',
            image:'banana.jpg',
            units: 0
        },
        {
            name:'Shit',
            description:'eeeeewe',
            price:'0.02',
            image:'banana.jpg',
            units: 0
        },
    ]    
  },
  mutations: {
    setFruitUnits (state, fruitUnits) {
      const fruit = state.fruits.filter((item)=>(item.name==fruitUnits.name))
      if (fruit && fruit.length > 0) {
        fruit[0].units = fruitUnits.units
      }
    },
    setContract (state, address) {
      state.contract = address
    },
    clearFruitUnits (state) {
      const newFruits = state.fruits.map(fruit => {
        fruit.units = 0
        return fruit
      })
      state.fruits = newFruits
    }
  },
  getters: {
    totalAmount: state => {
      return state.fruits.reduce((accumulator, currentValue) => (accumulator + Number(currentValue.units) * parseFloat(currentValue.price)), 0)
    },
    getFruitUnits: (state) => (name) => {
      const fruit = state.fruits.filter((item)=>(item.name==name))
      if (fruit && fruit.length > 0) {
        return fruit[0].units
      }
      return 0     
    }
  },
  actions: {

  }
})
