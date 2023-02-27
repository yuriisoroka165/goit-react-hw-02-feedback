import css from "./FriendList.module.css";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            <FriendListItem friends={friends} />
        </ul>
    );
};