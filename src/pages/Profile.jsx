import { useContext, useState } from "react";
import { userNameContext } from "../contexts/user/userContext";

const Profile = () => {
  const { state, dispatch } = useContext(userNameContext);

  const [form, setForm] = useState({
    username: state.user.username,
    profile_photo: state.user.profile_photo,
  });

  const handleSave = () => {
    dispatch({ type: "EDIT_PROFILE", payload: form });
    alert("Profile updated!");
  };

  return (
    <section>
      <input
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <input
        value={form.profile_photo}
        onChange={(e) => setForm({ ...form, profile_photo: e.target.value })}
      />

      <button onClick={handleSave}>Save</button>
    </section>
  );
};

export default Profile;
