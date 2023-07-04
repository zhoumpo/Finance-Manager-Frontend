<template>
    <div>
        <h1>Configuration</h1>
        <el-form>
            <!-- Form fields for creating a Bank -->
            <el-form-item label="Bank Name">
                <el-input v-model="newBankName"></el-input>
            </el-form-item>
            <el-button type="primary" @click="createBank">Create Bank</el-button>
            <!-- Form fields for creating a Bank Account -->
            <!-- ... -->
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
            // Logic for creating a new bank using the API (e.g., Django)
            // You can make an HTTP request to your Django API endpoint here
        },
        // Add more methods as needed
    }
}
</script>
  