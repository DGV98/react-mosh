// import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import Like from "./components/Like";
// import ExpandableText from "./components/ExpandableText";
import { useState, useRef } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseTable from "./expense-tracker/ExpenseTable";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 34, category: "Utilities" },
    { id: 2, description: "bbb", amount: 34, category: "Utilities" },
    { id: 3, description: "ccc", amount: 34, category: "Utilities" },
    { id: 4, description: "ddd", amount: 34, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseTable
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
