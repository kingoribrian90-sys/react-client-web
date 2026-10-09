import { useEffect, useRef } from "react";

function Footer(){
    const footerRef = useRef(null);

    useEffect(() => {
        const section = footerRef.current;
        const revealElements = section?.querySelectorAll(".reveal");
        if (!revealElements?.length) return;

        revealElements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 0.1}s`;
        });

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealElements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return(
        <>
            <section id="footer" ref={footerRef}>
                <h2 className="reveal">Contact info</h2>
                <p className="reveal">Get help or place an order directly.</p>

                <div className="footer-links">
                    <a className="reveal" href="tel:+254113297853" aria-label="Call us" title="Call us">
                        <span className="button-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 16.5a2.5 2.5 0 0 1-2.5 2.5c-6.6 0-12-5.4-12-12A2.5 2.5 0 0 1 9 4H11a1 1 0 0 1 1 1 9 9 0 0 0 9 9 1 1 0 0 1 1 1v2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="m16.5 9.5-3 3m0 0-2-2m2 2 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        +254 113 297 853
                    </a>
                    <a className="reveal" href="mailto:info@demkadairy.com" aria-label="Email us" title="Email us">
                        <span className="button-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="m4.5 6.75 7.5 5.25 7.5-5.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        info@demkadairy.com
                    </a>
                    <a className="reveal" href="https://www.facebook.com/demkadairy" target="_blank" rel="noreferrer" aria-label="Visit our Facebook page" title="Facebook">
                        <span className="button-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8.5V6.5c0-1.1.9-2 2-2h2.5V2h-2.5C8.01 2 6 4.01 6 6.5v2H3v3h3v7h3.5v-7H12l.5-3H9Z" fill="currentColor"/>
                            </svg>
                        </span>
                        Facebook
                    </a>
                    <a className="reveal" href="https://www.instagram.com/demkadairy" target="_blank" rel="noreferrer" aria-label="Visit our Instagram profile" title="Instagram">
                        <span className="button-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                                <path d="M16.5 7.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                                <path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" stroke="currentColor" strokeWidth="1.8"/>
                            </svg>
                        </span>
                        Instagram
                    </a>
                    <a className="reveal" href="https://www.demkadairy.com" target="_blank" rel="noreferrer" aria-label="Visit our website" title="Website">
                        <span className="button-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.8"/>
                                <path d="M4 12h16M12 4.5c2.5 3.3 2.5 6.7 0 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                                <path d="M12 4.5c-2.5 3.3-2.5 6.7 0 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                        </span>
                        demkadairy.com
                    </a>
                </div>
            </section>
        </>
    )
}

export default Footer