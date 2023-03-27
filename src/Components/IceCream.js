import { useSelector, useDispatch } from "react-redux";

const IceCreamContainer=()=>{
    const numoficecreams = useSelector((state)=>state.IcecreamReducer.numOfIcecreams);
    const dispatch= useDispatch();

    const buyIcecream = () => {
      dispatch({type:'BUY_ICECREAM'});

    }

    const addIcecream = () => {
        dispatch({type:'ADD_ICECREAM'});
  
      }
    return (
        <div>
          <h1> IceCreamShop</h1>
          <h2>Num of cakes {numoficecreams}</h2> 
          <button onClick={buyIcecream}>Buy an Icecream</button>
          <button onClick={addIcecream}>Add an Icecream</button>
        </div>
    )
}

export default IceCreamContainer;