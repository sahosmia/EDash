import {useEffect} from "react";

function PageTitle({ title }) {

  useEffect(() => {
    document.title = title + " - EDash";
  }, [title]);
    

}

export default PageTitle;
