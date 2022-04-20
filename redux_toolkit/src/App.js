
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, asyncIncrement } from "./store/feature/counterSlice";
import { loadData } from "./store/feature/movieSlice";

function App() {
  const { count } = useSelector(state => state.counter)
  const { list } = useSelector(state => state.movie)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadData())
  }, [])
  return (
    <div>
      <button onClick={() => { dispatch(increment({ step: 5 })) }}>{count}</button>
      <button onClick={() => { dispatch(asyncIncrement({ step: 10 })) }}>{count}</button>
      {
        list.map(e => <div key={e.id}>{e.name}</div>)
      }
    </div>
  );
}

export default App;
