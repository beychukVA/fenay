import axios from "../axios";
import { parseJwt } from "../helpers/getId";

export const FetchFeed = async () => {
  const { _id } = await parseJwt();
  //  const response = await axios.get('/api/posts/singleuserpost/'+_id)
  const response = await axios.get("/api/posts/timeline/all");
  const result = await Promise.all(
    response.data.data.map(async (item) => {
      const response2 = await axios.get(
        "/api/comments/postcomments/" + item._id
      );
      return { ...item, comments: response2.data.data };
    })
  );
  return result;
};
export const LikeDisPost = async (postId) => {
  const response = await axios.put("/api/posts/like", {
    id: postId,
  });
  return response?.data;
};
