export default function Transaction() {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
                <button className="link">
                    <img alt="Edit" className="icon" src="./images/edit.svg" />
                </button>
                <button className="link">
                    <img
                        alt="Delete"
                        className="icon"
                        src="./images/delete.svg"
                    />
                </button>
            </div>
        </li>
    );
}
