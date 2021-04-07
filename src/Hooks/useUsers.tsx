import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    // Llamado de API
    uploadUsers();
  }, []);

  const uploadUsers = async () => {
    const resp = await reqResApi.get<ReqResList>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert("There are no more users");
    }
  };

  const pageNext = () => {
    pageRef.current++;
    uploadUsers();
  };

  const pagePrevious = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      uploadUsers();
    }
  };

  return {
    users,
    pageNext,
    pagePrevious,
  };
};
