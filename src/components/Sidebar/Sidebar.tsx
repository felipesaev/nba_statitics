import { MenuOptions } from "../Menu/Menu";


function Sidebar() {
  return (
    <>
      <div style={{
        width: "250px",
        padding: '20px',
      }}>
          <MenuOptions />
      </div>

    </>
  );
}

export default Sidebar;