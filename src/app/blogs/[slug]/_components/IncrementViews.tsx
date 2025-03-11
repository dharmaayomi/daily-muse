"use client";

import { axiosInstance } from "@/lib/axios";
import { FC, useEffect } from "react";

interface IncrementViewsProps {
  objectId: string;
  totalView: number;
}

const IncrementViews: FC<IncrementViewsProps> = ({ objectId, totalView }) => {
  const IncrementViews = async () => {
    try {
      await axiosInstance.put(`/data/blogs/${objectId}`, {
        totalView: totalView + 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    IncrementViews();
  }, []);
  return <div />;
};

export default IncrementViews;
