import getUrl from "~/utils/getUrl";
import {API} from "~/constants";

const logout = () => fetch(getUrl(API.Logout), {
    method: "GET",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

export default logout;
