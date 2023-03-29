import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { UserContext } from "./UserContext";

interface iCartProviderProps {
  children: React.ReactNode;
}

interface iCartProvider {
  search: string;
  products: iProductsElement[];
  filteredProducts: iProductsElement[];
  currentSale: iProductsElement[];
  haveSearch: boolean;
  apiError: boolean;
  modalStatus: boolean;
  countCart: number;
  clearSearch: () => void;
  newItens: (value: string) => void;
  addItem: (item: iProductsElement) => void;
  changeModalStatus: () => void;
  removeItem: (id: number) => void;
  deleteItem: (id: number) => void;
  cleanCart: () => void;
}

export interface iProductsElement {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qtd: number;
}

export const CartContext = createContext({} as iCartProvider);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([] as iProductsElement[]);
  const [filteredProducts, setFilteredProducts] = useState(
    [] as iProductsElement[]
  );
  const [haveSearch, setHaveSearch] = useState(false);
  const [countCart, setCountCart] = useState(0);
  const [apiError, setApiError] = useState(false);
  const [currentSale, setCurrentSale] = useState([] as iProductsElement[]);
  const [modalStatus, setModalStatus] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (err) {
        setApiError(true);
      }
    }
    if (Object.keys(user).length !== 0) {
      getProducts();
    }
  }, [user]);

  function clearSearch() {
    setFilteredProducts([]);
    setSearch("");
    setHaveSearch(false);
    toast.success("Limpeza feita");
  }

  function addItem(item: iProductsElement) {
    let newArray = [...currentSale];
    let index = newArray.findIndex((element) => element.id === item.id);

    if (index !== -1) {
      newArray[index].qtd += 1;
      setCountCart(countCart + 1);
      setCurrentSale([...newArray]);
    } else {
      item.qtd = 1;
      setCountCart(countCart + 1);
      setCurrentSale([...newArray, item]);
    }

    toast.success("Item adicionado");
  }

  function newItens(value: string) {
    setSearch(value);
    if (value === "") {
      setFilteredProducts([]);
      setHaveSearch(false);
    } else {
      let newProducts = products.filter((element: iProductsElement) => {
        if (
          element.name.toLowerCase().includes(value.toLowerCase()) ||
          element.category.toLowerCase().includes(value.toLowerCase())
        ) {
          return element;
        }
      });
      toast.success("Pesquisa feita");
      setFilteredProducts(newProducts);
      setHaveSearch(true);
    }
  }

  function changeModalStatus() {
    setModalStatus(!modalStatus);
  }

  function removeItem(id: number) {
    let newArray = [...currentSale];
    let index = newArray.findIndex((element) => element.id === id);
    if (newArray[index].qtd > 1) {
      newArray[index].qtd -= 1;
    } else {
      newArray.splice(index, 1);
    }
    toast.success("Item removido");
    setCountCart(countCart - 1);
    setCurrentSale([...newArray]);
  }

  function deleteItem(id: number) {
    let newArray = [...currentSale];
    let index = newArray.findIndex((element) => element.id === id);

    let itemQtd = newArray[index].qtd;
    newArray.splice(index, 1);

    toast.success("Item deletado");
    setCountCart(countCart - itemQtd);
    setCurrentSale([...newArray]);
  }

  function cleanCart() {
    setCurrentSale([]);
    setModalStatus(!modalStatus);
    setCountCart(0);
    toast.success("Itens removidos");
  }

  return (
    <CartContext.Provider
      value={{
        search,
        products,
        filteredProducts,
        currentSale,
        haveSearch,
        apiError,
        modalStatus,
        countCart,
        clearSearch,
        newItens,
        addItem,
        changeModalStatus,
        removeItem,
        deleteItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
