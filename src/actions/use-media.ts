import { useState, useEffect } from "react";

import { newAxios } from "../utils/newAxios";
import { Media } from "../types/Media";

export const useMedia = (id: number) => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getMedia = async () => {
      const { data } = await newAxios.get<Media>(`/media/${id}`);

      setPhoto(data.guid.rendered);
    };

    getMedia();
  }, [id]);

  return { photo };
};
