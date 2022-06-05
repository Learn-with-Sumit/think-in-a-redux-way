import axios from "../../utils/axios";

export const getTags = async () => {
    const response = await axios.get("/tags");

    return response.data;
};
