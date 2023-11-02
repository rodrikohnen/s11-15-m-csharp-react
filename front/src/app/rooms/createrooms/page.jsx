import CreateRooms from "@/components/Rooms/CreateRooms";
import NavBarRooms from "@/components/Rooms/NavBarRooms";

export default function Rooms() {
  return (
    <>
      <NavBarRooms />
      <main className="mainContainer">
        <section className="mt-7 ml-4 p-4 gap-14">
          <CreateRooms />
        </section>
      </main>
    </>
  );
}
