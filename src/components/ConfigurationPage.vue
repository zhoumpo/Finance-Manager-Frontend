<template>
    <div>TEST</div>
    <div>
        <h1>Configuration</h1>
        <el-form>
            <el-form-item label="Bank Name">
                <el-input v-model="newBankName"></el-input>
            </el-form-item>
            <el-button type="primary" @click="createBank">Create Bank</el-button>
            <!-- Add more form fields for bank account creation -->
        </el-form>
    </div>
</template>
  
  
<script>
export default {
    data() {
        return {
            newBankName: ''
            // Add more data properties as needed
        }
    },
    methods: {
        createBank() {
            console.log("test")
            // Logic for creating a new bank using the API (e.g., Django)
            // You can make an HTTP request to your Django API endpoint here
        },
        // Add more methods as needed
    }
}
</script>
  