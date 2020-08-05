
const AppComponent = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
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