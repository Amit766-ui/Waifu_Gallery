import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const payload = { exclude: [] }; // You can add URLs to exclude here
        const waifuResult = await axios.post(
            "https://api.waifu.pics/many/sfw/waifu",
            payload
        );

        const imageUrls = waifuResult.data.files;

        res.render("index.ejs", {
            images: imageUrls,
        });
    } catch (error) {
        // Error handling
        if (error.response) {
            console.error("API Error Response:", error.response.data);
            console.error("Status Code:", error.response.status);
        } else if (error.request) {
            console.error("No Response Received:", error.request);
        } else {
            console.error("Error in Setting Up Request:", error.message);
        }
        res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(3000, ()=> {
    console.log(`Server started on ${port}`);
})