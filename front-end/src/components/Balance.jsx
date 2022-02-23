import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount); // pramapina sumas 
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // sudeda suma 

  return (

       <div>
    <h4 className='white'>Mano biudžetas</h4>
    <h1>{total}€</h1>
       </div>

       )
};

export default Balance;
