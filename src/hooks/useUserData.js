import React from "react";
import useSWR from "swr";
import api from "../api";

export const useFetchUserData = userToken => {
  const userData = useSWR(["userData", userToken], (_, userToken) => api.get(`/users?token=${userToken}`).then(res => res.data));

  const isUserDataLoading = userData.data == null || userData.isValidating;
  const isUserDataError = userData.error;

  return { userData, isUserDataLoading, isUserDataError };
};
