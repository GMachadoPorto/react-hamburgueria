import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserProvider {
  user: iUser;
  loadingRequest: boolean;
  loadingToken: boolean;
  login: (dataFormLogin: iLogin) => void;
  registerUser: (dataFormRegister: iRegister) => void;
  logout: () => void;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

export const UserContext = createContext({} as iUserProvider);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [user, setUser] = useState({} as iUser);
  const [loadingToken, setLoadingToken] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      setLoadingToken(true);

      const token = localStorage.getItem("@hambToken");
      const id = localStorage.getItem("@hambUserId");

      if (!token || !id) {
        setLoadingToken(false);

        return;
      }

      try {
        const jsonToken = JSON.parse(token);
        const jsonId = JSON.parse(id);

        api.defaults.headers.common.authorization = `Bearer ${jsonToken}`;

        const { data } = await api.get(`users/${jsonId}`);

        setUser(data);
      } catch (error) {
        localStorage.removeItem("@hambToken");
        localStorage.removeItem("@hambUserId");
      } finally {
        setLoadingToken(false);
      }
    }

    getUser();
  }, []);

  async function login(dataFormLogin: iLogin) {
    setLoadingRequest(true);
    try {
      const { data } = await api.post("login", dataFormLogin);

      localStorage.removeItem("@hambToken");
      localStorage.removeItem("@hambUserId");

      localStorage.setItem("@hambToken", JSON.stringify(data.accessToken));
      localStorage.setItem("@hambUserId", JSON.stringify(data.user.id));

      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;

      setUser(data.user);

      navigate("/home", { replace: true });

      toast.success("Login feito com sucesso");
    } catch (err) {
      toast.error("Email/Senha incorretos");
    } finally {
      setLoadingRequest(false);
    }
  }

  async function registerUser(dataFormRegister: iRegister) {
    setLoadingRequest(true);
    delete dataFormRegister.confirmPassword;

    try {
      const { data } = await api.post("users", dataFormRegister);

      localStorage.removeItem("@hambToken");
      localStorage.removeItem("@hambUserId");

      localStorage.setItem("@hambToken", JSON.stringify(data.accessToken));
      localStorage.setItem("@hambUserId", JSON.stringify(data.user.id));

      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;

      setUser(data.user);

      navigate("/home", { replace: true });

      toast.success("Cadastro feito com sucesso");
    } catch (err) {
      toast.error("Email já existe");
    } finally {
      setLoadingRequest(false);
    }
  }

  function logout() {
    localStorage.removeItem("@hambToken");
    localStorage.removeItem("@hambUserId");

    navigate("/", { replace: true });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loadingRequest,
        loadingToken,
        login,
        registerUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
