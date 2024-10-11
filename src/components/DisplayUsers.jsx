import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  console.log(data);

  return (
    <>
      <div className="my-4">
        <table className="table table-dark table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id + 1}</th> {/* User index displayed */}
                  <td>{user}</td> {/* Display the user */}
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayUsers;
