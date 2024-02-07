import Navbar from "./components/Navbar";
import PetList from "./components/PetList";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-14">
        <PetList />
      </div>
    </>
  );
}
