import { useEffect, useState } from "react";

const useLoginData = () => {
  const [logindata, setLoginData] = useState();

  useEffect(() => {
    fetchLoginData();
  }, []);

  const fetchLoginData = async () => {
    try {
      const data = {
        userName: "Vipul",
      };
      setLoginData(data.userName);
    } catch (error) {
      alert(error);
    }
  };
  return logindata;
};

export default useLoginData;
