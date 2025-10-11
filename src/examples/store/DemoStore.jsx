import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset } from  "./demoCounter";

export default function demoStore (){
    const count = useSelector ((state) => state.counter?.value?? 0);
    const dispatch = useDispatch ();

    return(
        <section style ={{padding: 16, fontFamily: "system-ui"}}>
            <h3> Demo Redux Store</h3>
            <p>Count: <b>{count}</b></p>
            <div style ={{display: "flex" , gap: 8, justifyContent: "center"}}>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button> 
                <button onClick={() => dispatch(reset())}>Reset</button>

            </div>
            <small style={{color: '#666'}}>
                Loaded only when <code>VITE_ENABLE_EXAMPLES=true</code>
            </small>
        </section>
    );
}
