import styled from 'styled-components'
import media from '../../utils/helpers/media'

export const FlexCards = styled.div`
   padding-top: 24px;
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   ${media.mobile`
      justify-content:center;
   `}
`
