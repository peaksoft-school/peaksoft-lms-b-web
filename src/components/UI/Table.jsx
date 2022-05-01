import React from 'react'
import styled from 'styled-components'

export function Table({ data }) {
   const columns = data[0] && Object.keys(data[0])
   const headerOfTable = data[0] && columns.map((heading) => <th>{heading}</th>)
   const bodyOfTable = data.map((row) => (
      <tr>
         {columns.map((column) => (
            <td>{row[column]}</td>
         ))}
      </tr>
   ))
   return (
      <WraperForTable>
         <StyledTable cellPadding={0} cellSpacing={0}>
            <Thead>
               <tr>{headerOfTable}</tr>
            </Thead>
            <Tbody>{bodyOfTable}</Tbody>
         </StyledTable>
      </WraperForTable>
   )
}
const WraperForTable = styled.div`
   min-height: 86.3vh;
   min-height: 94.5vh;
   background-color: #fff;
   border-radius: 10px;
`
const StyledTable = styled.table`
   background-color: #eff0f6;
   font-family: var(--base-font);
   font-style: normal;
   width: 170vh;
   color: #1d293f;
   hr {
      border-top: 0.2px solid #e7e9eb;
   }
`
const Thead = styled.thead`
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   width: 170vh;

   th {
      white-space: nowrap;
      padding: 1rem;
      text-align: left;
      background-color: #ffffff;
      border-bottom: 1px solid silver;
   }
`
const Tbody = styled.tbody`
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   tbody,
   tr:nth-child(odd) {
      background-color: white;
   }

   .tbody,
   tr,
   td {
      white-space: nowrap;
      width: 20%;
      overflow-wrap: break-word;
      padding: 0.5rem;
      padding: 10px 30px 10px 20px;
   }
`
