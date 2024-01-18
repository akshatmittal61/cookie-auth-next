import { ApiRequest, ApiResponse } from "@/types/api";
import { RESPONSE_MESSAGES } from "@/constants/enum";

export const login = async (req: ApiRequest, res: ApiResponse) => {
    try {
        return res.status(200).json({
            message: RESPONSE_MESSAGES.SUCCESS,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
            error: error.message
        });
    }
}
