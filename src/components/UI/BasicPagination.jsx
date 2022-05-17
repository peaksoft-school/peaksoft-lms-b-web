import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import styled from 'styled-components'

export const BasicPagination = ({ props, pages }) => {
   return <PaginationStyle {...props} count={pages} />
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
