import React from "react";

const Network = () => {
  const [status, setStatus] = React.useState(window.navigator.onLine);

  React.useEffect(() => {
    const handleStatus = () => {
      setStatus(window.navigator.onLine);
    };

    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);

    return () => {
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, []);

  let isOnline = status === true;
  let isOffline = status === false;
  let response = isOnline ? "Online" : "Offline";

  return { isOnline, isOffline, response };
};

export default Network;
