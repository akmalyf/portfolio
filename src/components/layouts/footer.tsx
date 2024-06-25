const Footer = () => {
    return (
        <footer className=''>
            <div className='container py-4 text-center'>
                <p>
                    &copy; {new Date().getFullYear()} MyNextApp. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
