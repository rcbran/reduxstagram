// a reducer takes in two things



// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {

    switch(action.type) {
        case 'INCREMENT_LIKES' :
            //return updated state

            let i = action.index;

            return [
                ...state.slice(0, i), // a copy of state up to the one we are updating
                { ...state[i], likes: state[i].likes+1 }, // update the one post we want, overwrite its state.likes
                ...state.slice(i + 1)   // the rest of the state after the one we updated
            ]
        
        default:
            return state;

    }
}

export default posts;