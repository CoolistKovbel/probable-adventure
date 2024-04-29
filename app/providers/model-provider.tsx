"use client";

import { useEffect, useState } from "react";
import AddTokenToVault from "../components/modals/addTokenToValt";


export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddTokenToVault />
    </>
  );
};
