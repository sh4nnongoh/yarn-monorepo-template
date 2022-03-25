import React, {
  FC, ReactElement, useContext, useEffect, useState
} from "react";
import { Container } from "react-bulma-components";
import { AxiosContext } from "../contexts/AxiosContext";
import { Markets } from "../types/ftx";
const BTC: FC = (): ReactElement => {
  const { axios } = useContext(AxiosContext);
  const [price, setPrice] = useState<string | number>("-");
  useEffect(() => {
    axios?.get("/markets/BTC/USD")
      .then((r) => {
        const data = r.data.result as Markets;
        if (data.price) {
          setPrice(data.price);
        }
      });
  }, [axios]);
  return (
    <Container>
      <p>
        BTC Price:
        {" "}
        {price}
      </p>
    </Container>
  );
};
export default BTC;
