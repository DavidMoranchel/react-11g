// import React, { useState } from "react";

// export default function Exercises() {
//   const [USD, setUSD] = useState(0);
//   const [MXN, setMXN] = useState(0);

//   return (
//     <div className="container h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
//           <div className="col p-5">
//             <form>
//               <div className="form-group col-12">
//                 <label className="text-white" htmlFor="USDInput">
//                   USD
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="USDInput"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter USD"
//                   value={Number(USD).toFixed(2)}
//                   onChange={(event) => {
//                     setUSD(event.target.value);
//                     setMXN(event.target.value * 19.84);
//                   }}
//                 />
//               </div>
//               <div className="form-group col-12">
//                 <label className="text-white" htmlFor="MXNInput">
//                   MXN
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="MXNInput"
//                   placeholder="Enter MXN"
//                   value={Number(MXN).toFixed(2)}
//                   onChange={({ target: { value } }) => {
//                     setUSD(value / 19.84);
//                     setMXN(value);
//                   }}
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function Exercises() {
//   const [cardNumber, setCardNum] = useState(0);
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [cvc, setCvc] = useState("");

//   return (
//     <div className="container h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <input
//           type="number"
//           placeholder="Card Number"
//           value={cardNumber}
//           onChange={(event) => {
//             setCardNum(event.target.value);
//           }}
//         ></input>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         ></input>

//         <input
//           type="text"
//           placeholder="Valid thru"
//           value={date}
//           onChange={(event) => {
//             setDate(event.target.value);
//           }}
//         ></input>

//         <input
//           type="text"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(event) => {
//             setCvc(event.target.value);
//           }}
//         ></input>

//         <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-start px-0">
//           <div className="col d-flex align-items-end flex-column">
//             <h1 className="p-5" id="bank">
//               VISA
//             </h1>
//             <div className="border border-warning">
//               <h4 id="bank">{cardNumber}</h4>
//               <h4 id="bank">{name}</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function Excercises() {
//   const [cardNumber, setCardNum] = useState(0);
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [cvc, setCvc] = useState("");

//   return (
//     <div className="container h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <div className="d-flex flex-column justify-content-between col-10 col-md-6 bg-secondary rounded h-50 align-items-center px-0">
//           <div className="">
//             <h1>VISA</h1>
//           </div>
//           <div className="">
//             <h4>{cardNumber}</h4>
//             <h4>{name}</h4>
//           </div>
//           <div className="">
//             <h4>{date}</h4>
//             <h4>{cvc}</h4>
//           </div>
//         </div>
//       </div>
//       <input
//         type="number"
//         placeholder="Card Number"
//         value={cardNumber}
//         onChange={(event) => {
//           setCardNum(event.target.value);
//         }}
//       ></input>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(event) => {
//           setName(event.target.value);
//         }}
//       ></input>

//       <input
//         type="text"
//         placeholder="Valid thru"
//         value={date}
//         onChange={(event) => {
//           setDate(event.target.value);
//         }}
//       ></input>

//       <input
//         type="text"
//         placeholder="CVC"
//         value={cvc}
//         onChange={(event) => {
//           setCvc(event.target.value);
//         }}
//       ></input>
//     </div>
//   );
// }

import React, { useState } from "react";

const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
};

export default function Excercises() {
  // const petsUI = petsData.map(({ name, age }, index) => (
  //   <li key={index} className="list-group-item">
  //     Name: {name}, age: {age}
  //   </li>
  // ));

  const petKey = Object.entries(petsData);

  // const petsToPrint = petKey.map(({ pet }, index) =>
  //   // <li key={index} className="list-group-item">
  //   //   Name: {name}, age: {age}
  //   // </li>
  //   console.log(pet)
  // );

  const petsToPrint = petKey.map((animal) => {
    const animalObject = animal.map(([element, { name, age }], index) => {
      const elementToPrint = element;

      return elementToPrint;
      // <li key={index} className="list-group-item">
      //   Name: {name}, age: {age}
      // </li>;
    });
  });

  console.log(petsToPrint);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">Pets</div>
            <ul className="list-group list-group-flush">{petsToPrint}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
