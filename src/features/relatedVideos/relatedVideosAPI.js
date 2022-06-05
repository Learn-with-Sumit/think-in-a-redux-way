import axios from "../../utils/axios";

// ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({ tags, id }) => {
    const limit = 5;
    let queryString =
        tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join("&") +
              `&id_ne=${id}&_limit=${limit}`
            : `id_ne=${id}&_limit=${limit}`;

    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};
