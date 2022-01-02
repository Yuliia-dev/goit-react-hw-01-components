import styled from 'styled-components'

export const FriendListStyle = styled.ul`
padding: 15px;
margin: 15px auto;
max-width: 300px;
background-color: #ffffff;
`

export const FriendItem = styled.li`
display: flex;
justify-content: start;
align-items: center;
border-radius: 5px;
margin-bottom: 10px;
padding: 15px;
height: 100px;
max-width: 300px;
box-shadow: 5px 5px 5px #a39c9c;
list-style: none;
background-color: #f0eeee;
`

export const Status = styled.span`
margin-right: 20px;
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${props => {
    return props.status ? "#008000" : "#FF0000";
}};
`

export const Name = styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 18px;
line-height: 24px;
font-weight: 700;
margin-left: 20px;
`