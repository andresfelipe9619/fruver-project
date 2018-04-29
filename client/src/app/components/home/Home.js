import React, {Component} from 'react';
import {Dimmer, Loader, Segment, Container, Grid, Header} from 'semantic-ui-react';
import {connect} from "react-redux";
import {loadHome} from '../../actions/homeActions';

class Home extends Component {

    componentDidMount() {
        this
            .props
            .loadPage();
    }

    render() {

        if (this.props.hasErrored) {
            return (
                <h1>Error</h1>
            )
        } else if (this.props.isLoading) {
            return (
                    <Segment style={{
                            marginTop: '7em',
                            height: '20em'
                        }}>
                        <Dimmer inverted active>
                            <Loader size='big'>Loading</Loader>
                        </Dimmer>
                    </Segment>
            );
        } else {
            return (
                    <Container>
                        <Grid
                            divided='vertically'
                            style={{
                            marginTop: '7em'
                        }}>
                            <Grid.Row >
                                <Grid.Column width={5}>
                                    <Header as='h1' textAlign="center">
                                        MISION
                                    </Header>
                                    <p>Satisfacer todas las necesidades de nuestros clientes con la prestación de un
                                        servicio óptimo, que garantice la permanencia de los mismos. Para ello ofrecemos
                                        productos de fruver de excelente calidad a los mejores precios y con la
                                        amabilidad y puntualidad que nos caracteriza.</p >

                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Header as='h1' textAlign="center">
                                        VISION
                                    </Header>
                                    <p>Consolidarnos como la mejor empresa de fruver mayorista que se encuentra en
                                        el mercado local y nacional. Afianzando la fidelización de nuestros clientes a
                                        través de nuestro excelente servicio con productos de calidad y atención amable.
                                        Siendo su distribuidor predilecto de fruver y de su confianza y como valor
                                        agregado crecer en imagen.
                                    </p >

                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Header as='h1' textAlign="center">
                                        HISTORIA
                                    </Header>
                                    <p>Somos una empresa familiar creada en el año 2003, comercializadora de frutas
                                        y verduras. Ofrecemos a nuestros clientes un adecuado servicio con la mejor
                                        atención y puntualidad. Nuestra experiencia nos ha enseñado que la trazabilidad
                                        del proceso de producción en el campo, nos permite brindarles a nuestros
                                        clientes productos preseleccionados con los más altos estándares de calidad, que
                                        brinden confianza y aceptación del producto para su consumo. Somos
                                        distribuidores mayoristas, ubicados en la Cl 19 No. 29-26, B/ Santa Elena.
                                        Actualmente tenemos contratos con franquicias, clínicas, casinos, hoteles y
                                        restaurantes.
                                    </p >

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {message: state.homeReducer.homeLoaded, isLoading: state.homeReducer.homeLoading, hasErrored: state.homeReducer.homeErrored};
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadPage: () => {
            dispatch(loadHome());
        },
        errorMessage: () => {
            dispatch()
        },
        successMessage: () => {
            dispatch()
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);