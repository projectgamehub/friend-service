import FriendService from "../services/friendService.js";
import { getIdByUsername } from "../utils/index.js";

const getFriendList = async (req, res) => {
    const username = req.params?.username;
    const userId = await getIdByUsername(username);
    const friendService = new FriendService();
    const response = await friendService.getFriendList(userId);

    return res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        success: true
    });
};

export default getFriendList;
