"use client";

import { useEffect, useState } from "react";
import AddTokenToVault from "../components/modals/addTokenToValt";
import CreateVault from "../components/modals/createVault";


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
      <CreateVault />
    </>
  );
};
