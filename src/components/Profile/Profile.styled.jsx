import styled from 'styled-components';


export const ContainerProfile = styled.div`
position: relative;
padding: 15px;
margin: 15px auto;
display: block;
background-color: ${(props) => props.theme.colors.white};
height: 400px;
max-width: 300px;
`
export const Description = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20px;
`
export const Avatar = styled.img`
max-height: 200px;
border-radius: 50%;
background-color: ${(props) => props.theme.colors.lightGrey};
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
left: 0;
bottom: 0;
display: flex;
justify-content: space-between;
padding: 0;
height: 15%;
width: 100%;
`

export const StatsItem = styled.li`
display: flex;
align-items: center;
flex-direction: column;
padding: 15px 10px;
width: 100%;
background-color: ${props => `${props.color}`};
`

export const Quantity = styled.span`
font-size: 14px;
line-height: 24px;
font-weight: 700;    
`