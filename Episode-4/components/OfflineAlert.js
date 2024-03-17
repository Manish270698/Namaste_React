import { useEffect, useState } from "react";
import useOnlineCheck from "../utils/useOnlineCheck";

const OfflineAlert = () => {
  const { showAlert, content } = useOnlineCheck();
  return <div className={`offline-alert ${showAlert}`}>{content}</div>;
};

export default OfflineAlert;
