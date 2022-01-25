import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
