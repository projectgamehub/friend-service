import FriendService from "../services/friendService.js";
import { customError } from "../errors/errorUtils/index.js";

const sendRequest = async (req, res) => {
    const senderId = req.senderId;
    const receiverId = req.params.userId;
    if (senderId == receiverId) {
        throw new customError(400, "Receiver is same as sender");
    }

    const friendService = new FriendService();
    await friendService.sendRequest(senderId, receiverId);

    return res.status(200).json({
        message: "Request sent successfully",
        success: true
    });
};

export default sendRequest;
