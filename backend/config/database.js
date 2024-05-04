import mongoose from 'mongoose'

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then ((data)=>{
        console.log(`mongodb connected to server:${data.connection.host}`)
    })
}

export default connectDatabase 