import ChatItem from "./ChatItem";

export default function ChatItems() {
    return (
        <ul>
            <li>
                <ChatItem
                    avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    name="Saad Hasan"
                    lastMessage="bye"
                    lastTime="25 minutes"
                />
                <ChatItem
                    avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    name="Sumit Saha"
                    lastMessage="will talk to you later"
                    lastTime="10 minutes"
                />
                <ChatItem
                    avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    name="Mehedi Hasan"
                    lastMessage="thanks for your support"
                    lastTime="15 minutes"
                />
            </li>
        </ul>
    );
}
