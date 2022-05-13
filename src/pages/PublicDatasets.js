import React from "react";

import { Head, Card } from "../components/global";

import { datasets } from "../constants";

export default function PublicDatasets() {
  return (
    <section className="p-l p-r p-b p-t">
      <Head title="public datasets" />

      {/* items  */}
      <div className="row g-5 ">
        {datasets.slice(0, 3).map((item) => (
          <div key={item.id} className="col-4">
            <Card data={item} route="datasets" />
          </div>
        ))}
      </div>
    </section>
  );
}
