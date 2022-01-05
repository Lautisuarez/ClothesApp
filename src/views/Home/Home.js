import { Fragment } from "react";

// COMPONENTS
import CarouselBS from "../../components/CarouselBS/CarouselBS";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <Fragment>
            {/* CAROUSEL DE NOVEDADES */}
            <CarouselBS />
            {/* PRODUCTOS */}
            <h2 className="container title">Productos</h2>
            <ItemListContainer />
        </Fragment>
    )
}

export default Home;