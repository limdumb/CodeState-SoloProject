import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function TodoPlusIcon({menuHandler}) {

  return (
      <div className="Plus__Icon__Section" onClick={()=> menuHandler()}>
        <MapsUgcIcon fontSize="large"/>
      </div>
  );
}
