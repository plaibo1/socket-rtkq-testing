import React from "react";
import { useLazyGetAllUsersQuery } from "../../store/services/rtkFetchingSlice";
import { DefaultButton } from "../BaseComponents/DefaultButton/DefaultButton";

export const FetchWithRTK = () => {
  const [fetchUsers, { isLoading, data }] = useLazyGetAllUsersQuery();
  // const queryData = useLazyGetAllUsersQuery();
  // const [fetchUsers, { isLoading, data }] = queryData;

  const handleFetch = async () => {
    await fetchUsers();
  };

  return (
    <div className="border border-slate border-dashed p-4 rounded-xl">
      <div className="text-xl font-bold mb-4">Fetching with RTK</div>

      {isLoading && (
        <div className="w-full h-32 bg-slate-100 rounded-xl flex items-center justify-center text-xl ">
          LOADING.....
        </div>
      )}

      {!isLoading && data && (
        <div className="h-[400px] overflow-auto my-4">
          {data.map((user, index) => {
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
