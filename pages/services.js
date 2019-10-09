import Layout from "../components/Layout";

const Services = () => (
    <Layout title="Nossos Serviços">
        <h1>Nossos Serviços</h1>

        <div className="services">
            {/* imagens com 500x333 */}
            <div className="services-list">
                <div className="item">
                    <img src="/static/services/service1.jpg" />
                    <h2>Jardim de Inverno</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
                </div>
                <div className="item">
                    <img src="/static/services/service2.jpg" />
                    <h2>Paisagismo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
                </div>
                <div className="item">
                    <img src="/static/services/service3.jpg" />
                    <h2>Jardim Japonês</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
                </div>
                <div className="item">
                    <img src="/static/services/service4.jpg" />
                    <h2>Manutenção</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
                </div>
            </div>
        </div>

        <style jsx>{`
            .services {
                max-width: 1000px;
                margin: 0 auto;
            }
            .services-list {
                padding: 0 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .services .item {
                padding: 20px;
                margin-bottom: 40px;
                width: 50%;
            }
            img {
                max-width: 100%;
                min-height: 333px;
                max-height: 333px;
            }
            h2 {
                margin: 0 0 5px 0;
            }
            p {
                font-size: 18px;
                color: #777;
            }
            @media (max-width: 600px) {
                .services .item {
                    width: auto;
                    padding: 10px 20px;
                }
            }
        `}</style>
    </Layout>
);

export default Services;
