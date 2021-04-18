<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">你的合约</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ address }} <span v-if="network">in {{ network }}</span></h6>
                <p class="card-text mt-4">累计交易 {{ balance }} 元</p>
                <button type="button" class="btn btn-primary" @click="withdraw">Withdraw</button>
            </div>
        </div>
        <div class="mt-4" v-if="logged">
            <h5>你绑定的metamask钱包账号</h5>
            <h6 class="text-muted">{{ logged }}</h6>
            <table class="table table-striped mt-4 w-75">
                <thead>
                    <tr class="table-primary">
                        <th scope="col">合约名字</th>
                        <th scope="col" class="text-right">账户</th>
                        <th scope="col" class="text-center">时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(payment, index) in payments" :key="index">
                        <th scope="row">{{ payment.reference }}</th>
                        <td class="text-right">{{ payment.amount }} eth</td>
                        <td class="text-center">{{ payment.date }}</td>
                    </tr>
                </tbody>
            </table>
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
    data: function () {
        return {
            balance: 0,
            network: '',
            logged: '',
            payments: [],
            loading: false
        }
    },
    computed: {
        address: function() {
            return this.$store.state.contract
        }
    },
    created: async function () {
        const address = this.$store.state.contract
        console.log("address这", address)
        const paymentsService = new PaymentsService()
        this.network = await paymentsService.getNetwork() 
        this.logged = await paymentsService.getLoggedAccount()
        if (address) {
            this.balance = await paymentsService.getBalance(address, 'ether')
            this.payments = await paymentsService.getPaymentsOfAccount(address, this.logged, 'ether')
        }
        console.log("payment的内容",this.payments)
    },
    methods: {
        withdraw: async function() {
            const address = this.$store.state.contract
            const paymentsService = new PaymentsService()
            if (address) {
                this.loading = true
                try {
                    await paymentsService.withdraw(address)
                    this.balance = await paymentsService.getBalance(address, 'ether')
                } catch (e) {
                    console.log(e)
                }
                this.loading = false
            }
        }
    }
}
</script>