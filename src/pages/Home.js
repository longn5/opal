import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

import { Header } from "../components/commons";
import { Menu } from "../components/Home";
import { ApplicationContext } from "../context/application";
import api from "../api";

const Home = () => {
  const [, appDispatch] = useContext(ApplicationContext);

  useEffect(() => {
    axios.get(api.gets.local_file).then(({ status, data }) => {
      if (status === 200) {
        appDispatch({ type: "save-menu", items: data.menu });
      }
    });
  }, [appDispatch]);

  return (
    <div>
      <Header />
      <Menu />
      <Button>View Cart</Button>
    </div>
  );
};

export default Home;
