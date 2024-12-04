# API_Based_Project
Waifu API Image Gallery Project
This is a simple web application built with Node.js, Express, and EJS that utilizes the Waifu.pics API to fetch and display images dynamically. Users can view up to 30 images fetched from the API.

🚀 Features
Fetches multiple images from the Waifu.pics API.
Displays images dynamically using EJS templates.
Clean and responsive UI with CSS styling.
Easy-to-understand project structure.

🛠️ Technologies Used
Node.js: Backend runtime.
Express: Web framework for handling routes and middleware.
Axios: HTTP client for making API requests.
EJS: Template engine for rendering dynamic content.
CSS: Styling the web page.


⚙️ Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/waifu-api-project.git
cd waifu-api-project
Install Dependencies Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Run the Application

bash
Copy code
node app.js
The server will start at http://localhost:3000.

🖼️ API Integration
This project uses the Waifu.pics API to fetch images.

API Endpoint Used: https://api.waifu.pics/many/sfw/waifu
Request Type: POST
Payload Example:
json
Copy code
{
  "exclude": []
}
Example Response
json
Copy code
{
  "files": [
    "https://i.waifu.pics/qUY7BBo.jpg",
    "https://i.waifu.pics/Tj6Wzwo.png"
  ]
}
📄 License
This project is open-source and available under the MIT License.

🙌 Acknowledgments
Waifu.pics API for providing the data.
Inspiration from various anime and manga communities.
