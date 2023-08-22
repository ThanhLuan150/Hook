import { useState } from "react";
import Tong from "./components/Tong";
import UserInfor from "./components/userinfor";
import List from "./components/List";
import Input from "./components/input";
import Mounted from "./components/Mounted";
import Content from "./components/Content";
function App() {
 
  return (
    <div >
       {/* <Tong/>
       <UserInfor/>
        <List/>
        <Input/> */}
        <Mounted/>
        <Content/>
    </div>
  );
}

export default App;
