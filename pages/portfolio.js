import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const Portfolio = () => {
    const images = [];
    const imageCount = 10;

    for (let i = imageCount; i > 0; i--) {
        // 600 x 400
        images.push(`/static/portfolio/${i}.jpg`);
    }

    return (
        <Layout title="Portifólio">
            <h1>Portifólio</h1>
            <Gallery images={images} />
        </Layout>
    );
};

export default Portfolio;
