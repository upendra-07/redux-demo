const initialIcecreamState = {
    numOfIcecreams:50
}

const Icecreamreducerfn=(state=initialIcecreamState,action)=>{

    switch(action.type){
        
        case 'BUY_ICECREAM': return{
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }

        case 'ADD_ICECREAM': return{
            ...state,
            numOfIcecreams:state.numOfIcecreams+1
        }

        default : return state
    }
}

export default Icecreamreducerfn;