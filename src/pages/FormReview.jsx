import React from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const FormReview = () => {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const getData = window.localStorage.getItem("reviews"); // ambil data dari localstorage
    //
    if (getData) {
      const parseData = JSON.parse(getData); // ubah jadi objek karna sebelumnya string
      setReviews(parseData); // masukin data ke state
    }
  }, []);
  //

  const handleReview = (e) => {
    e.preventDefault();

    const newReview = e.target.review.value;

    let updateDataReview;

    // data sebelumnya dimasukin berdasarkan inputan user
    updateDataReview = [...reviews, newReview];

    setReviews(updateDataReview); // masukan inputan user melalui setter state
    window.localStorage.setItem("reviews", JSON.stringify(updateDataReview)); // masukan data ke localstorage

    e.target.review.value = ""; // kosongkan value setelah di submit
  };

  return (
    <div>
      <Heading title={"Form-review"} />
      <form
        onSubmit={handleReview}
        className="relative text-center mt-5 h-[10vh]"
      >
        <label htmlFor="review">Review</label>
        <input
          type="text"
          name="review"
          id="review"
          className="ml-2 border border-black rounded"
        />
        <button type="submit" className="bg-red-400 mx-2 px-1 rounded">
          Submit
        </button>
      </form>
      <div className="relative text-center z-2 h-96">
        {reviews.map((item, id) => {
          return (
            <li key={id} className="list-decimal">
              {item}
            </li>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FormReview;
