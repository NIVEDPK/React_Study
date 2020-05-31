import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID -MOgUgDvScWAJ9vTSXe5e8HETNBb0gAnJ-wy8YTPGto",
  },
});
