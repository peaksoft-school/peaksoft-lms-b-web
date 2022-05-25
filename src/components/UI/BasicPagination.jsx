import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import styled from 'styled-components'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import PaginationItem from '@mui/material/PaginationItem'

const BasicPagination = ({ path, count }) => {
   const location = useLocation()
   const query = new URLSearchParams(location.search)
   const page = parseInt(query.get('page') || '1', 10)
   return (
      <PaginationStyle
         page={page}
         count={count}
         renderItem={(item) => (
            <PaginationItem
               component={Link}
               to={`${path}${`?page=${item.page}`}`}
               {...item}
            />
         )}
      />
   )
}
const PaginationStyle = styled(Pagination)`
   .MuiButtonBase-root {
      color: #8f8e8e;
      :hover {
         background: transparent;
      }
   }
   .Mui-selected {
      text-decoration: underline;
      color: #3772ff;
      background-color: white !important;
   }

   .MuiPaginationItem-icon {
      color: #3772ff;
      font-size: 30px;
   }
`

export const PaginationLink = ({ path, count }) => {
   return (
      <Routes>
         <Route
            path="*"
            element={<BasicPagination path={path} count={count} />}
         />
      </Routes>
   )
}
