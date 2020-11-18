import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import Wizard, { Steps, Step } from "./Wizard";
import NextButton from "./NextButton";
import FieldWithError from "./FieldWithErrors";

import { Link } from "react-router-dom";
import original from "../assets/original.png";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import ImageChoice from "./ImageChoice";

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/)
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  file: Yup.string().required("Required"),
});

const initialState = {
  firstName: "Ajay",
  lastName: "Kumar",
  email: "asdert@gmail.com",
  phone: "123456789",
  file: undefined,
};

export default function Questionnaire() {
  const [image, setImage] = useState({src:'',value:-1});
  return (
    <div className="questionnaire">
      <Formik
        validationSchema={Schema}
        initialValues={initialState}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({
          values,
          errors,
          touched,
          validateForm,
          setTouched,
          submitForm,
          setFieldValue,
        }) => (
          <Wizard>
            <Steps>
              <Step>
                {({ next }) => (
                  <>
                    <div className="nav">
                      <Link to="/">
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </Link>
                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>

                    <div className="indicators-container">
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>

                    <h1>
                      What best describes the sector <br /> of your company?
                    </h1>
                    <label>
                      First Name:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        name="firstName"
                      />
                    </label>

                    <label>
                      Last Name:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        name="lastName"
                      />
                    </label>
                    <div className="next-question">
                      <NextButton
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["firstName", "lastName"]}
                        className="next-question-button"
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h1>
                      In 50 words or less, <br /> Please give us some insight
                      into what you do.
                    </h1>
                    <label>
                      Email:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        type="email"
                        name="email"
                      />
                    </label>
                    <label>
                      Phone:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        name="phone"
                      />
                    </label>
                    <div className="next-question">
                      <NextButton
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["email", "phone"]}
                        className="next-question-button"
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h2>What skills or services are you looking for?</h2>

                    <ImageChoice setImage={setImage} image={image} />

                    <div className="next-question">
                      <NextButton
					    disabled = {image.value < 0}
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["email", "phone"]}
                        className={image.value < 0 ? "next-question-button" :'next-question-button-active'}
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              <Step>
                {({ previous, next }) => (
                  <>
                    <div className="nav">
                      <span className="prev-btn" onClick={()=>{
						  setImage({value:'-1',src:''})
						  return previous()
						  }}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                      <div className="indicator"></div>
                    </div>
                    <h2>page Four</h2>
                    <label>
                      Email:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        type="email"
                        name="email"
                      />
                    </label>
                    <label>
                      Phone:
                      <FieldWithError
                        errors={errors}
                        touched={touched}
                        name="phone"
                      />
                    </label>
                    <div className="next-question">
                      <NextButton
                        setTouched={setTouched}
                        validateForm={validateForm}
                        next={next}
                        fields={["email", "phone"]}
                        className="next-question-button"
                      >
                        DONE, NEXT QUESTION
                      </NextButton>
                    </div>
                  </>
                )}
              </Step>
              <Step>
                {({ jump, previous }) => (
                  <div>
                    <div className="nav">
                      <span className="prev-btn" onClick={previous}>
                        <AiOutlineLeft className="icons " />
                        <span>PREVIOUS</span>
                      </span>

                      <a href="https://www.vaengad.se/">
                        <img src={original} alt="vaengad" />
                      </a>
                      <a href="https://www.vaengad.se/">
                        <span>EXIT</span> <AiOutlineClose className="icons" />
                      </a>
                    </div>
                    <div className="indicators-container">
                      <div className="indicator "></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator"></div>
                      <div className="indicator active-indicator"></div>
                    </div>
                    <h2>Summary</h2>
                    <ul>
                      {Object.entries(values).map((x, i) => (
                        <li key={x[0]}>
                          {x.join(": ")}
                          <button onClick={() => jump(i > 1 ? 2 : 1)}>
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <button onClick={submitForm}>Submit</button>
                    </div>
                    <div>
                      <button onClick={previous}>Back</button>
                    </div>
                  </div>
                )}
              </Step>
            </Steps>
          </Wizard>
        )}
      </Formik>
    </div>
  );
}
