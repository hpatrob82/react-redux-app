import { useContext } from 'react';
import StateContext from '../context';

const Cat = () => {
    const [value, dispatch] = useContext(StateContext);
    const { activity } = value;
    const _handleClick = (type, activity) => {
        dispatch ({
            type,
            activity
        })
    return (
        <>
        <p>The Cat is...{activity}</p>
        
        <button type="button" onClick = {() => _handleClick('ACTION_EAT', eating)}>Eat</button>
        </>
    );
        
}
}
export default Cat;