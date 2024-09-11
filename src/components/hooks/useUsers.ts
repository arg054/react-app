import { useEffect, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
    const [error, setError] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState(false);
  
    //using effect hook to fetch data from the API
    //always include an empty array as the second argument to prevent infinite loops
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((response) => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => cancel();
    }, []);

    return { error, users, isLoading, setUsers, setError };
}
export default useUsers;