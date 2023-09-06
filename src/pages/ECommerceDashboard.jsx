import React, {useEffect} from "react";
import { revinueDatas } from "../data/dummy";
import RevinueItem from "../components/dashboard/RevinueItem";
import PageTitle from "../components/core/PageTitle";

function ECommerceDashboard() {
 

  return (
    <>
      <PageTitle title="Ecommerce" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revinueDatas.map((revinue, revinueI) => (
          <RevinueItem key={revinueI} itemData={revinue} />
        ))}
      </div>
    </>
  );
}

export default ECommerceDashboard;
