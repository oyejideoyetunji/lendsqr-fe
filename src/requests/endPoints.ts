export const getUsers = "/users";
export const getSingleUser = (id: string) => `${getUsers}/${id}`;