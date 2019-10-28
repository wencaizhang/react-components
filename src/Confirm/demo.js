

import React from "react";
import Confirm from "./index";

class ConfirmDemo extends React.Component {
  // async componentDidMount(){
  //   let res = await Confirm("确定删除吗")
  //   if(res) {
  //     console.log("是")
  //   } else {
  //     console.log("否")
  //   }
  // }


  render () {

    return (
      <div>
        <h3>confirm demo page</h3>
        <Confirm />
      </div>
    )
  }
}

export default ConfirmDemo