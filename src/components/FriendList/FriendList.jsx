import PropTypes from 'prop-types';
import {FriendListStyle, FriendItem, Status, Name} from "./FriendList.styled"

export function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendItem key={id}>
            <Status status={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendItem>
        );
      })}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
