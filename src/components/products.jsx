import { useEffect, useRef } from "react";
import strawberry from "../assets/Strawberry flavor.jpeg";
import vanilla from "../assets/vanilla.jpeg";
import chocolate from "../assets/Chocolate.jpg";
import lemonBiscuit from "../assets/lemon.webp";
import passion from "../assets/Passion.jpeg";
import natural from "../assets/natural.webp";
import cheddar from "../assets/cheddar-cheese.jpeg";
import mozzarella from "../assets/mozarella.jpeg";
import paneer from "../assets/paneer-cheese.jpeg";
import feta from "../assets/feta.jpeg";
import malanatural from "../assets/malanatural.jpeg";
import malasweetened from "../assets/malasweetened.png";
import broilers from "../assets/broilers.jpg";
import dairy from "../assets/dairy.jpg";
import sow from "../assets/sow.jpg";
import layers from "../assets/layers.jpg";
import chick from "../assets/chick.jpg";
import specialized from "../assets/specialized.jpg";
import placeholder from "../assets/hero.png";

function Products() {
    const productsRef = useRef(null);
    console.log(productsRef);

    useEffect(() => {
        const section = productsRef.current;
        const revealElements = section?.querySelectorAll(".details");
        if (!revealElements?.length) return;
        console.log(revealElements);

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
        console.log(observer);

        revealElements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="products" ref={productsRef}>
            <h2>The valuable products we make and sell </h2>

            <h3>Yorghurt</h3>
            <div className="yorghurt" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div className="strawberry details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={strawberry} alt="photo of strawberry flavour" width="200" height="200" />
                    <p>Strawberry flavour</p>
                </div>

                <div className="vanilla details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={vanilla} alt="photo of vanilla flavour" width="200" height="150" />
                    <p>Vanilla flavour</p>
                </div>

                <div className="chocolate details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={chocolate} alt="photo of chocolate flavour" width="200" height="200" />
                    <p>Chocolate flavour</p>
                </div>

                <div className="lemon-biscuit details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <img src={lemonBiscuit} alt="photo of lemon biscuit flavour" width="200" height="200" />
                <p>Lemon Biscuit flavour</p>
                </div>

                <div className="passion details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>            
                <img src={passion} alt="photo of passion flavour" width="200" height="200" />
                <p>Passion Flavour</p>
                </div>
                
                <div className="natural details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <img src={natural} alt="photo of natural flavour" width="200" height="200" />
                <p>Natural flavour</p>
                </div>
            </div>

            <h3>Mala</h3>
            <div className="mala" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div className="malanatural details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={malanatural} alt="photo of natural mala flavour" width="200" height="200" />
                    <p>Natural Mala Flavour</p>
                </div>
                <div className="malasweetened details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={malasweetened} alt="photo of sweetened mala flavour" width="200" height="200" />
                    <p>Sweetened Mala Flavour</p>
                </div>
            </div>

            <h3>Cheese</h3>
            <div className="cheese" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div className="cheddar details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={cheddar} alt="Photo of cheddar cheese" width="200" height="200" />
                    <p>Cheddar Cheese</p>
                </div>
                <div className="mozzarella details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={mozzarella} alt="Photo of mozzarella cheese" width="200" height="200" />
                    <p>Mozzarella Cheese</p>
                </div>
                <div className="paneer details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={paneer} alt="Photo of paneer cheese" width="200" height="200" />
                    <p>Paneer Cheese</p>
                </div>
                <div className="feta details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}    >
                    <img src={feta} alt="Photo of feta cheese" width="200" height="200" />
                    <p>Feta Cheese</p>
                </div>
            </div>

            <h3>Commercial Feeds</h3>
            <div className="feeds" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div className="dairy details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={dairy} alt="Photo of dairy meal" width="200" height="200" />
                    <p>Dairy Meal</p>
                </div>
                <div className="sow details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={sow} alt="Photo of sow and weaner feed" width="200" height="200" />
                    <p>Sow and Weaner Feed</p>
                </div>
                <div className="layers details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={layers} alt="Photo of layers mash feed" width="200" height="200" />
                    <p>Layers Mash Feed</p>
                </div>
                <div className="broilers details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={broilers} alt="Photo of broiler feed" width="200" height="200" />
                    <p>Broiler Feed</p>
                </div>
                <div className="specialized details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <img src={specialized} alt="Photo of specialized dairy feed" width="200" height="200" />
                    <p>Specialized Dairy Feed</p>
                </div>
                <div className="chick details" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}   >
                    <img src={chick} alt="Photo of chick mash feed" width="200" height="200" />
                    <p>Chick Mash Feed</p>
                </div>
            </div>
        </section>
    )
}

export default Products