import { toast } from "react-toastify";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAsGuestUser = async () => {
    try {
      const res = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(res.data));
      toast.success("Welcome guest user");
      return navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Guest user login error. Please try later.");
    }
  };
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="Email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block uppercase"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?
          <Link to="/register" className="link-hover link link-primary ml-2">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export function action(store) {
  return async function ({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const res = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(res.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };
}

export default Login;
