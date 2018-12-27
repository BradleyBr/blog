export default (state = [], action) => {
    switch (action.type)  {
        case 'ADD_POST':
        return action.post
        
        default:
            return state
    }
}