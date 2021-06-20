const axios = require("axios");

module.exports = async function() {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=03cb80608dda41b9bc00894d7349b8be&pageSize=5");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }