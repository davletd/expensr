import { Routes, Route, Link,  } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Landing from './components/landing'
import Layout from './components/layout'
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import ExpenseList from "./components/expenselist";
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="expenses" element={<ExpenseList />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </QueryClientProvider>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
