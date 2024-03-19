import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/users/register", {
          firstname,
          lastname,
          email,
          password,
        })
        .then((result) => {
          console.log(result.data);
          navigate("/login");
        });
    } catch (error) {
      console.error("error");
    }
  };
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                onSubmit={handleSubmit}
                action=""
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <CustomInput
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                />

                <CustomInput
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
