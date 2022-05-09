import {useSelector} from "react-redux";

const useAuth = () => {

    let {token, email, id} = useSelector(state => state.main)

    return {
        isAuth: !!email,
        email,
        id,
        token
    }
}

export default useAuth;