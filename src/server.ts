const express = require("express");
import { reverseString } from "./reverseString.js";
const morgan = require("morgan");
const cors = require("cors")



const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/reverse/myWordToReverse", (req: any, res: any) => {
    const stringReversed = reverseString()
    res.send(stringReversed)
})

const PORT = process.env.PORT ?? 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})