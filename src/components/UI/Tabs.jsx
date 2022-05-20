import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useNavigate, useSearchParams } from 'react-router-dom'

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
      maxWidth: 90,
      width: '100%',
      backgroundColor: '#3772FF',
      borderRadius: '5px 5px 0px 0px',
      height: '6px',
   },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
   ({ theme }) => ({
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px',
      marginRight: theme.spacing(3),
      color: '#000000',
      '&.Mui-selected': {
         color: '#3772FF',
      },
      '&.Mui-focusVisible': {
         backgroundColor: '#3772FF',
      },
   })
)

export const TabsTitle = ({ tabs }) => {
   const [value, setValue] = React.useState(tabs[0].path)
   const [searchParams, setSearchParams] = useSearchParams()
   useEffect(() => {
      setSearchParams({ tabs: value })
   }, [value])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <StyledTabs
         value={value}
         onChange={handleChange}
         aria-label="styled tabs example"
      >
         {tabs.map((label) => (
            <StyledTab
               key={label.path}
               label={label.label}
               value={label.path}
            />
         ))}
      </StyledTabs>
   )
}
