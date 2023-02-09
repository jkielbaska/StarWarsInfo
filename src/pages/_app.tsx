import "../styles/global.css";
import { AppPropsWithLayout } from "../types/tNextPageLayout";
import Layout from "../components/molecules/Layout";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <NextNProgress
              color="#EEDB00"
              height={7}
              options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </CssBaseline>
    </StyledEngineProvider>
  );
}

export default MyApp;

// <>
// <Head>
//   <title>
//     Zadanie testowe -
//     {/**
//      * TODO: Dodaj tytuł aktualnej strony
//      */}
//   </title>
// </Head>
// <div className="bg-global w-screen  h-screen  text-yellow">
//   <Breadcrumb />
//   <Component {...pageProps} />

//   {/**
//  * TODO: powrót do poprzedniej strony jeśli nie jesteśmy aktualnie na stronie głównej
//  //useRouter w Layout

//  */}

//   {router.pathname !== "/" && <Link href="/">Powrót</Link>}
// </div>
// </>
