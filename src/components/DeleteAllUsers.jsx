// import { deleteUsers } from "../store/slices/UserSlice"
import { useDispatch } from "react-redux"
import { ClearAllUsers } from "../store/actions";

const DeleteAllUsers = () => {
    const dispatch = useDispatch();
    const ClearAll = () => {
        // dispatch(deleteUsers())
        dispatch(ClearAllUsers())
    }

    return (
        <>
        <button className="btn btn-outline-secondary" onClick={ClearAll}>Clear Users</button>
        </>
    )    
}

export default DeleteAllUsers