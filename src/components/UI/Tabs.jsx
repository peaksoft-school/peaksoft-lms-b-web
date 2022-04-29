import * as React from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const StyledTabs = styled((props) => (
   <Tabs
      {...props}
      TabIndicatorProps={{
         children: <span className="MuiTabs-indicatorSpan" />,
      }}
   />
))({
   '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
   },
   '& .MuiTabs-indicatorSpan': {
      maxWidth: 80,
      width: '100%',
      backgroundColor: '#3772FF',
   },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
   ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'black',
      '&.Mui-selected': {
         color: '#3772FF',
      },
      '&.Mui-focusVisible': {
         backgroundColor: '#3772FF',
      },
   })
)

export const TabsTitle = ({ state, changeHandler, titlies }) => {
   const handleChange = (event, newValue) => {
      changeHandler(newValue)
   }

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ bgcolor: '#fffff' }}>
            <StyledTabs
               value={state}
               onChange={handleChange}
               aria-label="styled tabs example"
            >
               {/* titles map */}
               <StyledTab label="Учителя" />
               <StyledTab label="Студенты" />
            </StyledTabs>
            <Box sx={{ p: 3 }} />
         </Box>
      </Box>
   )
}
