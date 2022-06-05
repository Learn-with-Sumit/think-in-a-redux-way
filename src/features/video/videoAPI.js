import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};
