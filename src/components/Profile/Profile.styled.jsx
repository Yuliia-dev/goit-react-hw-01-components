import styled from 'styled-components'

export const ContainerProfile = styled.div`
position: relative;
padding: 15px;
margin-top: 15px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`
export const Description = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
height: 450px;
width: 300px;
`
export const Avatar = styled.img`
height: 200px;
border-radius: 50%;
background-color: #c5b5b5;
`
export const UserName = styled.p`
margin:  10px 0 0 0;
font-size: 18px;
line-height: 24px;
font-weight: 700;
`

export const UserInfo = styled.p`
margin: 10px 0 0 0;
font-size: 16px;
line-height: 24px;
font-weight: 400;
`

export const Stats = styled.ul`
position: absolute;
bottom: 0;
display: flex;
justify-content: space-between;
padding: 0;
height: 15%;
width: 100%;
margin-bottom: 0;
`

export const StatsItem = styled.li`
display: flex;
align-items: center;
flex-direction: column;
padding: 15px 10px;
width: 100%;
list-style: none;
background-color: ${prop => `${prop.color}`};
`

export const Quantity = styled.span`
font-size: 14px;
line-height: 24px;
font-weight: 700;    
`