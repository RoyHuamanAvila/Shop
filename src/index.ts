import app from "./app";
import dotenv from 'dotenv'
import connectDB from "./database";

dotenv.config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen in port ${PORT}`)
})
