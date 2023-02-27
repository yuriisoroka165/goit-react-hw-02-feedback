import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friends }) => {
    return (
        <>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={css.item}>
                    <span className={`${css.status} ${css[isOnline]}`}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </>
    );
};


FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        }),
    ),
};