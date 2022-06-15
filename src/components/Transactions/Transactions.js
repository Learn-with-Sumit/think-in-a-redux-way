import Transaction from "./Transaction";

export default function Transactions() {
    return (
        <>
            <p class="second_heading">Your Transactions:</p>

            <div class="conatiner_of_list_of_transactions">
                <ul>
                    <Transaction />
                    <Transaction />
                </ul>
            </div>
        </>
    );
}
