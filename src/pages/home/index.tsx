import React from "react";
import Navbar from "../../component/navBar";
import Property from "../../component/propertycard";

const Home: React.FC = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <>
      <div>
      <div className="mt-24">
        <div className="flex justify-center mx-20">
        <Property/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
