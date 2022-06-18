import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  isOpenModal: boolean;

  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalURL, setIsOpenModalURL] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
