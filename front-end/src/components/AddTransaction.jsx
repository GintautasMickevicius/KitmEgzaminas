import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { incomeCategories, expenseCategories } from "../constants/categories";



const AddTransaction = () => {

  const [text, setText] = useState(""); // teksto reiksme
  const [amount, setAmount] = useState(""); // sumos reiksme
  const [category, setCategory] = useState('Sąskaitos')  // pasirinktos kategorijos reiksme
  const [formData, setFormData] = useState('Pajamos'); // islaidos ar pajamos    

 

  const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
    e.preventDefault();  // apsisaugom nuo persikrovimo
    
    

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),  // sugeneruojam random id
      formData,
      category,
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);


    console.log(newTransaction); // submitinus pasitikrinam ka ivedem
  };


  const selectedCategories = formData === 'Pajamos' ? incomeCategories : expenseCategories; 
  /* tikrinimas, jeigu pasirinkta kategorija yra pajamos rodys pajamu kategorijas ir atvirskciai */
  

  return (
    <>
    <div className='addTransac'>
      <h3>Pridėti naują transakciją</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="category">Pasirinkti kategorija:</label>
          <div className='kategorijos'>
          <select value={formData} onChange={(e) => setFormData( e.target.value )}>    {/* uzsetinam pasirinkima */}
                  <option value='Pajamos'>Pajamos</option>
               <option value='Išlaidos'>Išlaidos</option>    
                  </select>
                  </div>
          <select value={formData.category} onChange={(e) => setCategory(e.target.value)}>  { /* uzsetinam pasirinkta kategorija */}
                  {selectedCategories.map((c) => <option key={c.type} value={c.type}>{c.type}</option>)}  {/* ismapinam kategorijas is categories.js failo */}
                  </select>

        </div>
        <div className="form-control">
          <label htmlFor="text">Tekstas</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}  // uzsetinam ivesta teksta 
            placeholder="Įveskite pavadinimą"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
         <b>(neigiamos - išlaidos, teigiamos - pajamos)</b>
          </label>
    
          <input type='number' placeholder="Įveskite sumą" label='Suma' value={amount} onChange={(e) => setAmount( e.target.value)}/>  {/* uzsetinam ivesta suma */}
        </div>  
      

         <div className='buttonas'> <button className='btn'>Pridėti</button> </div>  
  
      </form>
      </div>
   
       
   </>
  );
};

export default AddTransaction;
