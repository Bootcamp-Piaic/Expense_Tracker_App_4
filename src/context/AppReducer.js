export default (state, actions) => {
    switch (actions.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, actions.payload]
            }
        case 'DELETE_TRANSACTION':

            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== actions.payload)
            }

        default:
            return state
    }
}