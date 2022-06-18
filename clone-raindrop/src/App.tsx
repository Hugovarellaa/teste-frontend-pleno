import { Layout } from "./components/Layout";
import { ModalGroup } from "./components/ModalGroup";
import { ModalProvider } from "./hooks/useModal";

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <Layout />
      <ModalGroup title="Group name" text="Personal" />
    </ModalProvider>
  );
};
