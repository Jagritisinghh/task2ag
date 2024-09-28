const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./config/db');

const billingRoute= require('./routes/billingroutes'); // correct path
const invoiceRoute=require('./routes/invoiceRoutes');
const paymentRoute=require('./routes/paymentRoutes');

connectDB();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors('*')); // Enable CORS


app.listen(3006,()=>{
    console.log("Server running at port 3006");
});

app.use('/api', billingRoute);
app.use('/api', invoiceRoute);
app.use('/api', paymentRoute);