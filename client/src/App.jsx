import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import EditBook from "./Pages/EditBook";
import BookInfo from "./Pages/BookInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddBook } from "./Pages/AddBook";

function App() {
  const queryClinet = new QueryClient()
  return (
    <QueryClientProvider client={queryClinet}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="books/edit/:id" Component={EditBook} />
          <Route path="/books/add" Component={AddBook} />
          <Route path="/books/info/:id" Component={BookInfo} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
