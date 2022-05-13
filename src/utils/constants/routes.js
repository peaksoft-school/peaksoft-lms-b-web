// export const mainRoutes = [
//    {
//       path: '/',
//       label: 'loginPage',
//    },
//    {
//       path: '/admin',
//       label: 'adminPage',
//    },
//    {
//       path: '/instructor',
//       label: 'instructorPage',
//    },
//    {
//       path: '/student',
//       label: 'studentPage',
//    },
// ]

export const mainRoutes = {
   LOGIN: {
      path: '/',
      label: 'loginPage',
   },
   ADMIN: {
      path: '/admin',
      label: 'adminPage',
      role: 'ADMIN',
   },
   INSTRUCTOR: {
      path: '/instructor',
      label: 'loginPage',
      role: 'INSTRUCTOR',
   },
   STUDENT: {
      path: '/student',
      label: 'studentPage',
      role: 'STUDENT',
   },
}
