import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setCount } from "./store/slices/count";
import { getUsers } from "./store/slices/users";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const { usersList, status } = useSelector((state) => state.users);
  return (
    <>
      <p> App Compoent {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(setCount(20))}>setCountTo20</button>
      <button onClick={() => dispatch(getUsers({ limit: 5 }))}>
        get users
      </button>

      <div>
        <h3>Users List</h3>
        {status === "loading" && <p>loading ...</p>}
        {status === "failed" && <p> failed </p>}
        {status === "success" && usersList.map((item) => item.name)}
      </div>
    </>
  );
}
