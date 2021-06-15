import useSWR from "swr";
import api from "../api";

export const useFetchUserData = () => {
  const userData = useSWR(["userData"], _ => {
    api
      .get("/cadets")
      .then(res => res.data)
      .catch(error => console.log(error));
  });
  const isUserDataLoading = userData.data == null || userData.isValidating;
  const isUserDataError = userData.error;

  return { userData, isUserDataLoading, isUserDataError };
};
