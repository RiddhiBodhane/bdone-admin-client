import React from "react";
import Header from './Header/Header'


export default function Main() {

  const [ isActive, setIsActive ] = React.useState(false);

  function handleAppClass (isActiveMenu) {
    console.log('----', isActiveMenu);
    setIsActive(!isActive)
    console.log('isActive,', isActive)
  }

  return (
    <div className={isActive ? "wsmenucontainer wsoffcanvasopener" : "wsmenucontainer"}>
      <Header openMenu={handleAppClass}/>
      {/* <Customer />
      <Trnsactions/> */}
      
    </div>
  );
}