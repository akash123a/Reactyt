import React from 'react';

const user = {
  name: "Akash",
  imageurl: "https://tse1.mm.bing.net/th/id/OIP.pqi58zVbrdhrSg5D7I-V1wHaEK?pid=Api&P=0&h=220",
  imagesize: 90,
};

export default function User() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img 
        src={user.imageurl} 
        alt="user" 
        width={user.imagesize} 
        height={user.imagesize} 
      />
    </div>
  );
}
