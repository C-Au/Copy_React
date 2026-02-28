import { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {
  const [expList, setExp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/expenses") // <-- FIXED ENDPOINT
      .then((response) => {
        const data = response?.data;

        if (!Array.isArray(data)) {
          setError("Server returned unexpected data format.");
          setExp([]);
          return;
        }

        setExp(data);
      })
      .catch((err) => {
        console.error("Request failed:", err);
        setError("Failed to load expenses.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading expenses…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (expList.length === 0) return <p>No expenses found.</p>;

  return (
    <div>
      <h1>Expense data</h1>

      {expList.map((expense, index) => {
        const { date, description, category } = expense || {};

        return (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "8px",
              marginBottom: "8px",
            }}
          >
            <p>{date ?? "No date provided"}</p>
            <p>{description ?? "No description provided"}</p>
            <p>{category ?? "No category provided"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
