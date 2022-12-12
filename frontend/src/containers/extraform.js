<form className="form2" onSubmit={handleSubmit(onSubmit)}>
              <div className="formdiv2">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^[A-Za-z]{3,29}$/,
                  })}
                  placeholder="Name"
                />
                {errors.name?.type === "required" && (
                  <p style={{ color: "red" }}>name is required</p>
                )}
                {errors.name?.type === "pattern" && (
                  <p style={{ color: "red" }}>Invalid name format</p>
                )}
              </div>
              <div className="formdiv2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  placeholder="Email"
                  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                />
                {errors.email?.type === "required" && (
                  <p style={{ color: "red" }}>Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p style={{ color: "red" }}>Invalid email format</p>
                )}
              </div>
              <div className="formdiv2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p style={{ color: "red" }}>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p style={{ color: "red" }}>Minimum 4!</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p style={{ color: "red" }}>Maximum 20!</p>
                )}
              </div>
              <div className="formdiv2">
                <label htmlFor="password"> Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmpassword", { required: true })}
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p style={{ color: "red" }}>Password is required</p>
                )}
              </div>

              <button className="register_button" type="submit">
                Submit
              </button>
              <span>
                Already have an account ?
                <Link style={{ textDecoration: "none" }} to="/login">
                  {" "}
                  Login
                </Link>
              </span>
            </form>