import React, { useState } from "react";
import { Button, Divider, Input, input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useDispatch, connect } from "react-redux";

// const Counter = () => {
//   //store.count = mengambil nilai dari './store/index.js'
//   const counterSelector = useSelector((store) => store.counter.count);
//   const messageSelector = useSelector((store) => store.message);

//   const dispatch = useDispatch();

//   const [count, setCount] = useState(1);
//   const [inputCount, setInputCount] = useState(0);

//   const substract = () => {
//     count <= 1 ? alert("Count cannot be less than 1") : setCount(count - 1);
//   };

//   const add = () => {
//     count >= 10 ? alert("Count cannot be more than 10") : setCount(count + 1);
//   };
//   // console.log(count);

//   const incrementGlobalCount = () => {
//     dispatch({
//       type: "INCREMENT",
//     });
//   };

//   const decrementGlobalCount = () => {
//     dispatch({
//       type: "DECREMENT",
//     });
//   };

//   // payload = mengirimkan data
//   const setGlobalCount = () => {
//     dispatch({
//       type: "SET",
//       payload: inputCount
//     })

//     setInputCount(0)
//   }

//   return (
//     <div>
//       <h1 className="text-center">local state</h1>
//       <div className="flex items-center justify-around min-h-32">
//         <Button onClick={substract} color="danger">
//           Substract
//         </Button>
//         <span className="text-xl font-semibold">{count}</span>
//         <Button onClick={add} color="primary">
//           Add
//         </Button>
//       </div>{" "}
//       <Divider />
//       <h1 className="text-center">global state</h1>
//       <div className="flex items-center justify-around min-h-32">
//         <Button onClick={decrementGlobalCount} color="danger">
//           Substract
//         </Button>

//         <div className="flex flex-col ">
//           <Input
//           type="number"
//           value={inputCount}
//           onChange={(e) => setInputCount(parseInt(e.target.value))}/>
//           <Button
//           onClick={setGlobalCount}
//           color="secondary">set</Button>
//         </div>

//         <span className="text-xl font-semibold">{counterSelector}</span>
//         <Button onClick={incrementGlobalCount} color="primary">
//           Add
//         </Button>
//       </div>
//       <div className="flex items-center justify-around font-semibold flex-col">
//         {/* selector.count = mengambil nilai dari './store/counter.js' */}
//         <p>Global count : {counterSelector}</p>
//         <p>Global Message: {messageSelector}</p>
//       </div>
//     </div>
//   );
// };

// export default Counter;

class Counter extends React.Component {
  state = {
    count: 0,
    inputCount: 0,
  };

  substract = () => {
    const count = this.state.count;
    count <= 1
      ? alert("Count cannot be less than 1")
      : this.setState({ count: count - 1 });
  };

  add = () => {
    const count = this.state.count;
    this.state.count >= 10
      ? alert("Count cannot be more than 10")
      : this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>
        <div className="local-state">
          <h1 className="text-center">local state</h1>
          <div className="flex items-center justify-around min-h-96">
            <Button onClick={this.substract} color="danger">
              Substract
            </Button>
            <span className="text-xl font-semibold">{this.state.count}</span>
            <Button onClick={this.add} color="primary">
              Add
            </Button>
          </div>
        </div>

        <Divider />
        <h1 className="text-center">global state</h1>
        <div className="flex items-center justify-around min-h-32">
          <Button
            onClick={this.props.decrementGlobalCount}

            color="danger"
          >
            Substract
          </Button>

          <div className="flex flex-col ">
            <Input
              type="number"
              value={this.state.inputCount}
              onChange={(e) => this.setState({ inputCount: parseInt(e.target.value)})}
            />
            <Button 
            // onClick={this.props.setGlobalCount(this.state.inputCount)}
            onClick={() => this.props.setGlobalCount(this.state.inputCount)}
             color="secondary">set</Button>
          </div>
          <Button 
          onClick={this.props.incrementGlobalCount} color="primary">Add</Button>
        </div>
        <div className="flex items-center justify-around font-semibold flex-col">
          {/* selector.count = mengambil nilai dari './store/counter.js' */}
          <p>Global count : {this.props.counter.count}</p>
          {/* <p>input count : {this.state.inputCount}</p> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    incrementGlobalCount: () => {
      dispatch({
        type: "INCREMENT",
      })
    },
    decrementGlobalCount: () => {
      dispatch({
        type: "DECREMENT",
      })
    },
    setGlobalCount: (inputCount) => {
      dispatch({
        type: "SET",
        payload: inputCount
      })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
