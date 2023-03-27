
const initialCakeState = {
    numOfCakes:50
}



const Cakereducerfn=(state=initialCakeState,action)=>{

    switch(action.type){
        
        case 'BUY_CAKE': return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        case 'ADD_CAKE': return{
            ...state,
            numOfCakes:state.numOfCakes+1
        }

        default : return state
    }
}

export default Cakereducerfn;
