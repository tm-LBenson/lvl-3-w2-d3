export default function Header({ pet }) {
  return (
    <>
      <h1>Favorite Pet: {pet ? pet : "Please select a pet"}</h1>
    </>
  );
}
