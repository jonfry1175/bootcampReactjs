import React, { useState } from "react";
import { Button } from "@nextui-org/react";

// const Counter = () => {
//     const [count, setCount] = useState(1)

//    const substract = () => {
//     count <= 1 ? alert('Count cannot be less than 1') : setCount(count - 1)
//    }

//    const add = () => {
//     count >= 10 ? alert('Count cannot be more than 10') : setCount(count + 1)
//    }
//     console.log(count)

//   return (
//     <div>
//         <div className="flex items-center justify-around min-h-96">
//         <Button
//         onClick={substract} color="danger"
//         >Substract </Button >
//         <span className="text-xl font-semibold">{count}</span>
//         <Button
//         onClick={add} color="primary">Add</Button>
//         </div>
//     </div>
//   );
// };

class Counter extends React.Component {
    state = {
        count: 0
    }

    substract = () => {
       const count = this.state.count
       count <= 1 ? alert('Count cannot be less than 1') : this.setState({ count: count -1 })
    }

    add = () => {
        const count = this.state.count
        this.state.count >= 10 ? alert('Count cannot be more than 10') : this.setState({ count: count + 1 })
    }

  render() {
    return (
      <div>
        <div className="flex items-center justify-around min-h-96">
          <Button 
          onClick={this.substract}
          color="danger">Substract</Button>
          <span className="text-xl font-semibold">{this.state.count}</span>
          <Button 
          onClick={this.add} color="primary">Add</Button>
        </div>
      </div>
    );
  }
}

export default Counter;
