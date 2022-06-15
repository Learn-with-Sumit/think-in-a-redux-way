export default function Layout({ children }) {
    return (
        <div className="App">
            <div class="header">
                <h1>Expense Tracker</h1>
            </div>

            <div class="main">
                <div class="container">{children}</div>
            </div>

            <div class="footer">&copy;2022 Learn with Sumit</div>
        </div>
    );
}
