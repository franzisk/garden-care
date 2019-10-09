import { AnimatePresence, motion } from "framer-motion";

const animation = {
    initial: { opacity: 0 },
    active: {
        opacity: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0, y: 200 }
};

const Gallery = ({ images }) => (
    <div className="gallery">
        <AnimatePresence>
            {images.map(image => {
                return (
                    <motion.div className="image" key={image} initial={animation.initial} animate={animation.active} exit={animation.exit}>
                        <img src={image} />
                    </motion.div>
                );
            })}
        </AnimatePresence>

        <style jsx>{`
            .gallery {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-bottom: 50px;
                max-width: 1240px;
                margin: 0 auto;
            }
            .gallery .image {
                padding: 20px;
                width: 50%;
            }
            @media (max-width: 600px) {
                .gallery .image {
                    width: auto;
                    padding: 10px 20px;
                }
            }
        `}</style>
    </div>
);

export default Gallery;
