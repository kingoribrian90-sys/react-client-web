import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

function Contact() {
  const productOptions = {
    Yorghurt: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Lemon Biscuit",
      "Passion",
      "Natural",
    ],
    Mala: ["Natural", "Sweetened"],
    Cheese: ["Cheddar", "Mozzarella", "Paneer", "Feta"],
    "Commercial Feeds": [
      "Dairy Meal",
      "Sow & Weaner",
      "Layers Mash",
      "Broiler Feed",
      "Specialized Dairy",
      "Chick Mash",
    ],
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "Yorghurt",
    variant: productOptions["Yorghurt"][0],
    quantity: 1,
    phone: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleCategoryChange(e) {
    const category = e.target.value;
    setForm((s) => ({
      ...s,
      category,
      variant: productOptions[category][0] || "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setSubmitted({ ok: false, msg: "Please provide name and email." });
      return;
    }
    const order = { ...form };
    console.log("Order submitted:", order);
    setSubmitted({ ok: true, msg: "Order submitted. We'll contact you soon.", order });
    // In a real app we'd POST to an API here.
  }

  return (
    <section id="contact">
      <h1>Contact & Order</h1>
      <p>If you have questions, reach us at info@demkadairy.com</p>

      <h2>Order a Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Name
            <br />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Email
            <br />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Product Category
            <br />
            <select
              name="category"
              value={form.category}
              onChange={handleCategoryChange}
              style={{ width: "100%" }}
            >
              {Object.keys(productOptions).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Variant / Flavor
            <br />
            <select
              name="variant"
              value={form.variant}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              {(productOptions[form.category] || []).map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Quantity
            <br />
            <input
              name="quantity"
              type="number"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              placeholder="1"
              style={{ width: 120 }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Phone
            <br />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. +254701234567"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Delivery Address
            <br />
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street, city, and delivery instructions"
              style={{ width: "100%", minHeight: 80 }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Additional Notes
            <br />
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any special requests or order details"
              style={{ width: "100%", minHeight: 60 }}
            />
          </label>
        </div>

        <button type="submit">Submit Order</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 12 }}>
          {submitted.ok ? (
            <div>
              <strong>Success:</strong> {submitted.msg}
            </div>
          ) : (
            <div>
              <strong>Error:</strong> {submitted.msg}
            </div>
          )}
        </div>
      )}
      <WhatsAppButton phone="254113297853" message="Hello, I would like to place an order." />
    </section>
  );
}

export default Contact;