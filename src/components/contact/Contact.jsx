import React from "react";
import swal from "sweetalert";
import { useForm } from "@formspree/react";
import style from "./contact.module.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mwkzqgav");
  if (state.succeeded) {
    swal("Good job!", "Thanks For Your Message!", "success");
  }
  return (
    <div id="contact">
      <>
        {" "}
        <section className={`${style.section} ${style.section_contact}`}>
          <div className={style.container}>
            <h2 className={style.common_heading}>Contact Us</h2>
          </div>
          <div
            className={`${style.section_contact_main} ${style.section_contact_container}`}
          >
            <form onSubmit={handleSubmit}>
              <div className={`${style.grid} ${style.grid_two_column}`}>
                <div>
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    id="username"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject"></label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="submit"
                  className={style.btn}
                  disabled={state.submitting}
                />
              </div>
            </form>
          </div>
        </section>
      </>
    </div>
  );
};

export default Contact;
