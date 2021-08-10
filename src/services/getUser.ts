import getUrl from "~/utils/getUrl";
import {API} from "~/constants";

const getUser = async () => {
  const response = await fetch(getUrl(API.User), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });
  return await response.json();
}

export default getUser;
