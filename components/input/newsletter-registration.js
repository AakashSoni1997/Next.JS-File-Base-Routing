import { useContext, useRef } from "react";
import classes from "../style/newsletter-registration.module.css";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);
  const emailInput = useRef();

  async function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInput.current.value;
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Register for newsletter",
      status: "pending",
    });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully Registered for newsletter",
          status: "success",
        });
        emailInput.current.value = "";
      } else {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: error.message || "Something went wrong",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
