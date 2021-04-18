<template>
    <div>
        <el-button @click="testFruits">点我看水果列表</el-button>
        <div id="loadContract" class="d-flex justify-content-center align-items-center">
            <div class="text-center" style="width:60%">
            <button type="button" class="btn btn-primary mb-4" @click="createContract">
                创建新合约
            </button>
            <hr>
                <input id="address" v-model="address" type="text" placeholder="Existing contract.." class="mr-3 mt-4" />
                <button type="button" class="btn btn-primary" @click="loadContract">加载啊</button>
            </div>
        </div>
        <div v-if="loading" class="loading d-flex justify-content-center align-items-center">
            <div class="spinner-border"  role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import PaymentsService from '../domain/PaymentsService.js'

export default {
    name: 'PaymentsLoad',
    data: function() {
        return {
            address: '',
            loading: false
        }
    },
    methods: {
        createContract: async function() {
            const paymentsService = new PaymentsService()
            this.loading = true
            try {
                const contract = await paymentsService.createContract()
                console.log("options.address", contract.options.address)
                this.$store.commit('setContract', contract.options.address)
            } catch (e) {
                console.log("这个e是啥", e)
            }
            this.loading = false
        },
        loadContract: function() {
            console.log("这个address", this.address)
            this.$store.commit('setContract', this.address)
        },
        testFruits() {
            console.log('哇好多水果啊')
            console.log(this.$store.state.house)
        }
    }
}
</script>

<style scoped>
    #address {
        width: 400px;
        height: 32px;
    }
    #loadContract {
        margin-top: 6em
    }
</style>