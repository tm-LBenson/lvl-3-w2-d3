export default function PetPreview({ pet }) {
  // TODO: Add message to the preview when nothing is selected.
  // TODO: Add image of selected pet!
  let description = "";
  if (pet === "Cat") {
    description = "Cats are calm and curious.";
  } else if (pet === "Bunny") {
    description = "Bunnies are fluffy and quiet.";
  } else if (pet === "Dog") {
    description = "Dogs are loyal and playful.";
  }

  return (
    <>
      <div className="card">
        <h2>Preview</h2>
        <p>You picked: {pet}</p>
        <img
          src="https://placehold.co/200"
          alt={pet}
        />
        <p>{description}</p>
      </div>
    </>
  );
}
