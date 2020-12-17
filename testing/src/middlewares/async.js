//boilerplate syntax for any custom middleware:
const async = ({ dispatch }) => (next) => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default async;
