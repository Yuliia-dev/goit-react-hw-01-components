import styled from 'styled-components'
import getRandomHexColor from "../helper/randomColor"

export const Container = styled.section`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
margin-bottom: 15px;
width: 300px;
height: 150px;
background-color: white;
`

export const Title = styled.h2`
text-transform: uppercase;
height: 100%;
`

export const StatList = styled.ul`
position: absolute;
bottom: 0;
display: flex;
justify-content: space-between;
padding: 0;
height: 70px;
width: 100%;
margin-bottom: 0;
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