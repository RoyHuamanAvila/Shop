import app from "./app";
import dotenv from 'dotenv'
import connectDB from "./database";
import routes from "./routes";

dotenv.config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB();
    routes(app);
    console.log(`Server listen in port ${PORT}`)
})
