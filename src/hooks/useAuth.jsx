import { useSelector } from 'react-redux'

export const useAuth = () => {
   const { user, isLoading, error } = useSelector((state) => state.auth)
   // const { token, email, role } = user
   return {
      isAuth: !!user.token && !!user.email && !!user.role,
      token: user.token,
      email: user.email,
      role: user.role,
      isLoading,
      error,
   }
}
