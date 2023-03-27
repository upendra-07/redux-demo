import { useSelector, useDispatch } from "react-redux";

const CakeContainer=()=>{
    const numofcakes = useSelector((state)=>state.CakeReducer.numOfCakes);

    console.log(numofcakes);
    const dispatch= useDispatch();

    const buyCake = () => {
      dispatch({type:'BUY_CAKE'});
    }

    const addCake = () => {
        dispatch({type:'ADD_CAKE'});
  
      }
    return (
        <div>
          <h1> Cakeshop</h1>
          <h2>Num of cakes {numofcakes}</h2> 
          <button onClick={() => numofcakes !== 0 && buyCake()}>Buy a cake</button>
          <button onClick={addCake}>Add a cake</button>
        </div>
    )
}

export default CakeContainer;