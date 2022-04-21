// interface projectState {
//   display: boolean;
//   item: Projects;
//   section?: string;
// }

// interface actionState {
//   type: string;
//   payload: Projects;
// }

export const ProductReducer = (state: any, action: any) => {
  switch (action.type) {
    case "test":
      console.log(test);
      return { display: true, item: action.payload };
    default:
      return state;
  }
};
