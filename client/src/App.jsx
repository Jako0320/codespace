import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Auth from "./utils/auth";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./utils/AuthContext";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const token = Auth.getToken();
  // If the token is somehow in localStorage but expired remove it
  if (token && Auth.isTokenExpired(token)) {
    localStorage.removeItem("id_token");
  }
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
        <Footer />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
