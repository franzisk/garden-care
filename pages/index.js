import Link from "next/link";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const images = ["/static/portfolio/7.jpg", "/static/portfolio/8.jpg", "/static/portfolio/9.jpg", "/static/portfolio/10.jpg"];

const Homepage = () => (
    <Layout>
        <div className="cover">
            <div className="hello">
                <h1>Somos a Garden Care</h1>
                <div className="subtitle">Amamos o Verde!</div>
                <Link href="/services">
                    <a className="view-more">O que nós fazemos?</a>
                </Link>
                <amp-social-share
                    type="linkedin"
                    width="60"
                    height="44"
                    data-param-text="Hello world"
                    data-param-url="https://example.com/"></amp-social-share>

                <amp-social-share type="twitter"></amp-social-share>
            </div>
        </div>
        <div className="latest-work">
            <h2>Últimos Trabalhos</h2>
            <Gallery images={images} />
            <div className="">
                <Link href="/portfolio">
                    <a className="view-more">Ver Tudo</a>
                </Link>
            </div>
        </div>

        <style jsx>{`
            .cover {
                position: relative;
                min-height: 600px;
                background: transparent url(/static/conver.jpeg) no-repeat center center;
                background-size: cover;
            }
            .hello {
                position: absolute;
                top: 60px;
                left: 60px;
                border-radius: 8px;
                background: #ffffff;
                -webkit-box-shadow: 10px 10px 30px 0px rgba(6, 107, 42, 1);
                -moz-box-shadow: 10px 10px 30px 0px rgba(6, 107, 42, 1);
                box-shadow: 10px 10px 30px 0px rgba(6, 107, 42, 1);
                padding: 30px;
            }
            .hello div.subtitle {
                color: #0c3a00;
            }
            .hello h1 {
                margin: 0 0 10px 0;
                color: #4b7307;
            }
            a.view-more {
                text-transform: uppercase;
                font-size: 16px;
                color: #1b3806;
            }
            .latest-work {
                text-align: center;
                padding: 30px 0;
                margin-bottom: 60px;
            }
            @media (max-width: 480px) {
                .hello {
                    left: 30px;
                    right: 30px;
                    font-size: 18px;
                    padding: 20px;
                }
                h1 {
                    font-size: 28px;
                }
            }
        `}</style>
    </Layout>
);

export const config = { amp: "hybrid" };

export default Homepage;
