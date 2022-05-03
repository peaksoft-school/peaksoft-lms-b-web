import { useSelector } from 'react-redux'

export const useAuth = () => {
   const { email, token, role, isLoading, error } = useSelector(
      (state) => state.auth
   )
   return {
      isAuth: !!email,
      email,
      token,
      role,
      isLoading,
      error,
   }
}
