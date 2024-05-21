import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8f39e75c0d524d12b316fba5955c148d",
  }
});