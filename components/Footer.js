const Footer = () => (
    <div className="footer-wrapper">
        <div className="copyright">© {new Date().getFullYear()} Garden Care Ltda. ME</div>
        <style jsx>{`
            .footer-wrapper {
                text-align: center;
                margin-top: 80px;
                background-color: #f3f3f3;
            }
            .copyright {
                margin-bottom: 20px;
                color: #275901;
            }
        `}</style>
    </div>
);

export default Footer;
