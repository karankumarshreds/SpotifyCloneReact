import DataContextProvider from "../context/context-provider";
import { initialState } from "../reducer";
import reducer from '../reducer';
import Head from 'next/head';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <DataContextProvider initialState={initialState} reducer={reducer} >
                <Component {...pageProps} />
            </DataContextProvider>
        </>
    )
};

AppComponent.getInitialProps = async (appContext) => {
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return { ...pageProps }
};

export default AppComponent;