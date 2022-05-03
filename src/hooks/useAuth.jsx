import { useSelector } from 'react-redux'

export const useAuth = () => {
   const { email, token, role } = useSelector((state) => state.auth)
   return {
      isAuth: !!email,
      email,
      token,
      role,
   }
}
