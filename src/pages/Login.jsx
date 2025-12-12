import { useContext, useEffect, useState } from "react";
import { userNameContext } from "../contexts/user/userNameContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    profile_photo: "",
  });

  const navigate = useNavigate();
  const { state, dispatch } = useContext(userNameContext);

  // Jika sudah login → redirect
  useEffect(() => {
    if (state.user) {
      navigate(`/login/${btoa(state.user.email)}`, { replace: true });
    }
  }, [state.user]);

  // Convert file → Base64
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        profile_photo: reader.result, // base64
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      console.log("Email dan password tidak boleh kosong");
      return;
    }

    const newUser = {
      email: form.email,
      profile_photo: form.profile_photo || "",
      isLogin: true,
    };

    dispatch({ type: "LOGIN_USER", payload: newUser });

    navigate(`/login/${btoa(newUser.email)}`, { replace: true });

    setForm({ email: "", password: "", profile_photo: "" });
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <label>Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Password:</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* FOTO PROFIL */}
        <label>Profile Photo (URL):</label>
        <input
          type="text"
          placeholder="https://example.com/photo.jpg"
          value={form.profile_photo}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, profile_photo: e.target.value }))
          }
        />

        <label>Or Upload File:</label>
        <input type="file" accept="image/*" onChange={handleFile} />

        <button className="rounded bg-blue-600 py-1 text-white">Login</button>
      </form>
    </section>
  );
};

export default Login;
