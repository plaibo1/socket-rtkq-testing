export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.group(action.type);
      console.info("dispatching", action);
      console.log("next state", store.getState());
      console.groupEnd();
      return next(action);
    };
  };
};
