import { useSelector } from "react-redux";
import numberWithCommas from "../utils/numberWithCommas";

export default function Balance() {
    const { transactions } = useSelector((state) => state.transaction);

    const calculateIncome = (transactions) => {
        let income = 0;
        transactions.forEach((transaction) => {
            const { type, amount } = transaction;
            if (type === "income") {
                income += amount;
            } else {
                income -= amount;
            }
        });

        return income;
    };

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>{" "}
                {transactions?.length > 0 ? (
                    <span>
                        {numberWithCommas(calculateIncome(transactions))}
                    </span>
                ) : (
                    0
                )}
            </h3>
        </div>
    );
}
