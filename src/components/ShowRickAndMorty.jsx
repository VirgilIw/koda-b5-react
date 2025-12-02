const ShowRickAndMorty = ({ ricks }) => {
  return (
    <>
      <section className="grid grid-cols-4 gap-4 px-2 ">
        {ricks.map((rick, id) => {
          return (
            <div key={id} className="grid text-center">
              <img src={rick.img} alt={rick.name} />
              <p>{rick.name}</p>
              <p>{rick.status}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ShowRickAndMorty;
