import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sanka } from "../../store/reducers/fetchDataSlice";
import { DefaultButton } from "../BaseComponents/DefaultButton/DefaultButton";
import { setNotification } from "../../store/reducers/notifications";

export const FetchingWithThunk = () => {
  const {
    isLoading,
    data: users,
    error,
  } = useSelector((state) => state.fetchedData);
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(sanka("!!123 sanka 321!!"))
      .unwrap()
      .then((res) => {
        if (Object.keys(res).length) {
          dispatch(
            setNotification({
              message: "Users successfully loaded",
              type: "success",
            })
          );
        } else {
          dispatch(
            setNotification({
              message: "Something goes wrong. Data wasn`t delivered",
              type: "error",
            })
          );
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(
          setNotification({
            message: "Fetching error",
            type: "error",
          })
        );
      });
  };

  return (
    <div className="border border-slate border-dashed p-4 rounded-xl mb-6">
      <div className="text-xl font-bold mb-4">Fetching with thunks</div>

      {isLoading && (
        <div className="w-full h-32 bg-slate-100 rounded-xl flex items-center justify-center text-xl ">
          LOADING.....
        </div>
      )}

      {!error && !isLoading && Object.keys(users)?.length !== 0 && (
        <div className="h-[400px] overflow-auto my-4">
          {users.map((user, index) => {
            return (
              <div key={user.id} className="p-4 rounded-xl bg-slate-100 my-2">
                <div className="font-bold">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.website}</div>
              </div>
            );
          })}
        </div>
      )}

      <DefaultButton disabled={isLoading} onClick={handleFetch}>
        Fetch with thunks
      </DefaultButton>
    </div>
  );
};
