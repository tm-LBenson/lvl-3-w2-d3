export default function PetButtons({ setPet, pet }) {
  return (
    <>
      <div className="card">
        <h2>Choose a pet</h2>

        <button
          className={pet === "Dog" ? "active" : ""}
          onClick={() => setPet("Dog")}
        >
          Dog
        </button>

        <button
          className={pet === "Cat" && "active"}
          onClick={() => setPet("Cat")}
        >
          Cat
        </button>

        <button
          className={pet === "Bunny" ? "active" : ""}
          onClick={() => setPet("Bunny")}
        >
          Bunny
        </button>
      </div>
    </>
  );
}
