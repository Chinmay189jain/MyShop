import mongoose from 'mongoose'

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log("MongoDB Connected")
  } catch (error) {
    console.error("Error occured")
    process.exit(1)
  }
}

export default connectDB