// Contact.jsx
import { Form, useActionData } from "react-router-dom";

// Action function to handle form submission
// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);

    // Example: you could send this to a server via fetch here

    return { message: "Your message has been sent successfully!" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong. Please try again." };
  }
};

// Contact component
export const Contact = () => {
  const actionData = useActionData();

  return (
    <section className="container">
      <h2 className="section-common--heading">Contact Us</h2>
      <p className="section-common--subheading">
        Get in touch with us. We are always here to help you.
      </p>

      {/* Success or error messages */}
      {actionData?.message && (
        <p className="success" style={{ color: "green", marginBottom: "15px" }}>
          {actionData.message}
        </p>
      )}
      {actionData?.error && (
        <p className="error" style={{ color: "red", marginBottom: "15px" }}>
          {actionData.error}
        </p>
      )}

      <div className="section-contact">
        <div className="grid grid-two--cols">
          {/* Form Section */}
          <div className="contact-content">
            <Form method="POST">
              <div className="grid grid-two-cols mb-3">
                <div>
                  <label htmlFor="username">Full Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="abc@thapa.com"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="We are always here to help you."
                ></textarea>
              </div>

              <div className="mt-3">
                <button type="submit" className="btn contact-btn">
                  Send Message
                </button>
              </div>
            </Form>
          </div>

          {/* Image Section */}
          <div className="contact-image">
            <figure>
              <img src="/contact.png" alt="Contact" className="contact_image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
