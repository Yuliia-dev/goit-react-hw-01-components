import styled from 'styled-components'


export const Container = styled.table`
position: relative;
padding-top: 40px;
margin: 0 auto;
border-radius: 15px;
max-width: 600px;
height: 100%;
background-color: ${(props) => props.theme.colors.white};
`

export const Subtitle = styled.thead`
position: absolute;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
top: 0;
left: 0;
height: 40px;
width: 100%;
background-color: ${(props) => props.theme.colors.blue};
`

export const SubtitleBox = styled.tr`
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const SubtitleText = styled.th`
text-transform: uppercase;
padding: 15px 30px;
color: ${(props) => props.theme.colors.white};
`

export const TransactionBox = styled.tr`
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;

&:nth-child(even){
background-color: ${(props) => props.theme.colors.lightYellow};
}
`

export const TransactionText = styled.td`
text-transform: capitalize;
width: 120px;
padding: 10px 40px;
margin: 0;
border: ${(props) => `${props.theme.colors.whiteShaded} solid 2px`};
`