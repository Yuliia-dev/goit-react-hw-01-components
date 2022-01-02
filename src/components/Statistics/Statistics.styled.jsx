import styled from 'styled-components'
import getRandomHexColor from "../../helper/randomColor"

export const Container = styled.section`
position: relative;
padding: 15px;
margin: 15px auto;
max-width: 300px;
height: 150px;
background-color: ${(props) => props.theme.colors.white};
`

export const Title = styled.h2`
display: flex;
justify-content: center;
margin-top: 30px;
text-transform: uppercase;
`

export const StatList = styled.ul`
position: absolute;
left: 0;
bottom: 0;
display: flex;
justify-content: space-between;
max-height: 70px;
max-width: 100%;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
list-style: none;
padding: 17px;
background-color: ${getRandomHexColor};
`