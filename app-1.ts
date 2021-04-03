//acciones 

interface Action{
    type:string,
    payload?:any
}



const reducer = (state=10, action:Action) => {

    if(action.type === 'INCREMENTAR' ){
        return state+=1;
    }
    return state;
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'  
};

console.log(reducer(10,incrementadorAction));