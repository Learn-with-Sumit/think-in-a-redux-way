export default function Form() {
    return (
        <div class="form">
            <h3>Add new transaction</h3>

            <div class="form-group">
                <label for="transaction_name">Name</label>
                <input
                    type="text"
                    name="transaction_name"
                    placeholder="My Salary"
                />
            </div>

            <div class="form-group radio">
                <label for="transaction_type">Type</label>
                <div class="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="transaction_type"
                        checked
                    />
                    <label for="transaction_type">Income</label>
                </div>
                <div class="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="transaction_type"
                        placeholder="Expense"
                    />
                    <label for="transaction_type">Expense</label>
                </div>
            </div>

            <div class="form-group">
                <label for="transaction_amount">Amount</label>
                <input
                    type="number"
                    placeholder="300"
                    name="transaction_amount"
                />
            </div>

            <button class="btn">Add Transaction</button>

            <button class="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
