import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const fetchCourseDetails = async ({courseId}) => {
    console.log(courseId)
  const { data } = await axios.get(`http://localhost:5000/api/course/${courseId}`);
  return data;
};

export const useFetchCourseDetails = (courseId) => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchCourseDetails"],
    queryFn: async () => {
      return await fetchCourseDetails(courseId);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  const { isError, error } = response;
  useEffect(() => {
    if (isError) {
      addToast(generateErrorMessage(error), "error");
    }
  }, [isError]);
  return response;
};
