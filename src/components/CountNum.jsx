import React ,{ useState} from 'react'



function  CountNum  ()  {

        const [num , setNum] = useState(0);
        const [name,setName] = useState("Manoj ");
        const fruits = ["apple" , "banana" , "grapes" , "mango"];

          const nums = [1,2,3,4,5,6,7,8,9];
        const res = ["akash" , "ram" , "Elephant", "Nose" , "Lalu"];
          <div>
            <input type='text' value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Your name : {name}</h3>
          </div>
        

          const [show, setShow] = useState(false);

  return (

    
    <div>
           <div>
            <input type='text' value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Your name : {name}</h3>
          </div>
        <div style={{padding:"20px",color:"red",fontSize:"40px",backgroundColor:"black", width:"200px", margin:"auto", marginBottom:"20px"}}> 
            <button onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </button>

            {show && <p>Hello This is now visible ! </p>}
        </div>

             <ul style={{display:"flex", gap:"10px" , listStyle:"none", fontFamily:"cursive"}}>
              {res.map((r, index)=>{
                return <li key={index}>{r}</li>
              })}
             </ul>


          <ul>
            {fruits.map((fruit, index) => {
             return <li key={index}>{fruit}</li>
            })}
          </ul>
            <ul style={{display:"flex", gap:"10px", listStyle:"none",fontSize:"20px"}}>
              {nums.map((n,index )=>{
                return <li key={index}>{n}</li>
              })}
            </ul>

        <h2> Count: {num}</h2>

        <button onClick={() => setN(num + 1)} > Increment </button>
        <button onClick={() => setN(num - 1)} > Decrement </button>
        <button onClick={() => setN(num * 0)} > Reset </button>
    </div>
    
  );
}

export default CountNum