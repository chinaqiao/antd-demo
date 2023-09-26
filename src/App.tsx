import React, { useState } from "react";
import { Button, Modal } from "antd";
import Login from "./components/login";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign in to Charm
      </Button>
      <Modal title="" centered open={isModalOpen} footer={null}>
        <Login></Login>
      </Modal>
    </>
  );
};

export default App;
