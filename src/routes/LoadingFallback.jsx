
/* const Container = styled.div`
    height: 100vh;
    width: 100%;
    font-size: 25px;
    color: ${(props) => props.theme.palette.siteBlack.normal};
    ${(props) => props.theme.mixins.flex("center", "center")};
    flex-direction: "column";
`; */

function LoadingFallback() {
    return (
        {/* <Container>
            <CircularProgress />
        </Container> */}
    );
}

export default LoadingFallback;
