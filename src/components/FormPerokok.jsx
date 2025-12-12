import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormSmoker, removeFormSmoker } from "../redux/slices/smoker.slice";

const FormPerokok = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    isSmoker: "",
    smokeType: [],
  });
  //
  //
  //   const [dataList, setDataList] = useState([]);

  const dispatch = useDispatch();
  // const{state,dispatch}= useContext() 
  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handleGender = (e) => {
    setForm((prev) => {
      let updated = { ...prev };
      updated = {
        ...updated,
        gender: e.target.value,
      };
      return updated;
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    // const checked = e.target.checked;

    setForm((prev) => {
      let updated = { ...prev };
      const smokeType = updated.smokeType;

      updated = {
        ...updated,
        smokeType: checked
          ? [...smokeType, value]
          : smokeType.filter((smoke) => smoke !== value),
      };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addFormSmoker(form));

    // const objData = { ...form };

    // setDataList((prev) => [...prev, objData]);

    // console.log("Form submitted:", [...dataList, objData]);

    setForm({
      name: "",
      age: 0,
      gender: "",
      isSmoker: "",
      smokeType: [],
    });
  };

  const brands = ["Sampoerna", "Djarum", "Surya", "Marlboro", "GG Mild"];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-10">
      <section className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Formulir Data Perokok</h1>
          <p className="text-sm text-gray-600">
            Silakan isi data berikut dengan benar.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* NAME */}
          <section>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={form.name} // state
              onChange={handleChange} //setter
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </section>

          {/* AGE */}
          <section>
            <label htmlFor="age" className="mb-1 block text-sm font-medium">
              Umur
            </label>
            <input
              type="number"
              id="age"
              value={form.age}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </section>

          {/* GENDER */}
          <fieldset className="rounded-md border border-gray-300 px-4 py-3">
            <legend className="px-1 text-sm font-medium">Jenis Kelamin</legend>

            <div className="mt-2 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleGender}
                  checked={form.gender === "male"}
                />
                Laki-laki
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleGender}
                  checked={form.gender === "female"}
                />
                Perempuan
              </label>
            </div>
          </fieldset>

          {/* IS SMOKER */}
          <section>
            <label
              htmlFor="isSmoker"
              className="mb-1 block text-sm font-medium"
            >
              Apakah anda seorang perokok?
            </label>

            <select
              id="isSmoker"
              value={form.isSmoker}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="" disabled>
                Pilih Jawaban:
              </option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </section>

          {/* CHECKBOX */}
          <fieldset className="rounded-md border border-gray-300 px-4 py-3">
            <legend className="px-1 text-sm font-medium">
              Brand rokok yang digunakan
            </legend>

            <div className="mt-2 flex flex-col gap-2">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={form.smokeType?.includes(brand) || false}
                    onChange={handleCheckbox}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
      <button onClick={() => dispatch(removeFormSmoker(form))}>reset</button>
    </main>
  );
};

export default FormPerokok;
