import axios from "axios";
import { API_SECRET_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const popular = async () => {
  const url = `${BASE_URL}/recipes/random?apiKey=${API_SECRET_KEY}`;
  const { data } = await axios.get(url, { params: { number: 9 } });
  return data?.recipes;
};
export const usePopular = () => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: popular,
  });
  return { data, isFetching };
};

const cuisine = async (name) => {
  const url = `${BASE_URL}/recipes/complexSearch?apiKey=${API_SECRET_KEY}`;
  const { data } = await axios.get(url, { params: { cuisine: `${name}` } });
  return data?.results;
};
export const useCuisine = (cuisineId) => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["cuisine"],
    queryFn: () => cuisine(cuisineId),
  });
  return { data, isFetching, isLoading };
};

const search = async (name) => {
  const url = `${BASE_URL}/recipes/complexSearch?apiKey=${API_SECRET_KEY}`;
  const res = await axios.get(url, { params: { query: `${name}` } });
  return res?.data?.results;
};
export const useSearch = (name) => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => search(name),
  });
  return { data, isFetching, isLoading };
};
