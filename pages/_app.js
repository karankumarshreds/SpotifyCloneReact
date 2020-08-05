import DataContextProvider from "../context/context-provider";
import { initialState } from "../reducer";
import reducer from '../reducer';

const AppComponent = ({ Component, pageProps }) => {
    return (
        <DataContextProvider initialState={initialState} reducer={reducer} >
            <Component {...pageProps} />
        </DataContextProvider>
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