import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useNotification = () => {
  const customId = "onload-building-notification";
  const notify = (message: string) => {
    toast(message, {
      autoClose: 4000,
      position: "top-center",
      closeOnClick: true,
      theme: "dark",
      pauseOnHover: true,
      icon: "🔨",
      toastId: customId,
    });
  };

  return notify(
    "This website is still under construction, but feel free to contact me for work."
  );
};
