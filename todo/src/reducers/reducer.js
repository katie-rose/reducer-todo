export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
         todos: [
           {
             item: "Learn about reducers",
             completed: false,
             id: 123
           },
           {
             item: "Take Kilo for a walk",
             completed: false,
             id: 124
           },
           {
             item: "Pickup groceries",
             completed: false,
             id: 125
           },
           {
             item: "Order pizza",
             completed: false,
             id: 126
           }
         ]
       };

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newItem]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(item => !item.completed)
      };
    default:
      return state;
  }
};
