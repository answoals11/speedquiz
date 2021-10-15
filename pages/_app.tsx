import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { client } from 'api/quiz';
function MyApp({ Component, pageProps }) {
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps } /> 
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
export default MyApp