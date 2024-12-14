import { getStrapiURL } from "@/utils/url";
import qs from "qs";

export const fetchCmsContent = async (
  path: string,
  urlParamsObject = {},
  options = {}
) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    );

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error(
    //   `Please check if your server is running and you set all the required tokens. ${error}`
    // );
    return;
  }
};

export const getAuthHeaders = () => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
