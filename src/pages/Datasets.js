import React, { useContext, useEffect } from "react";

import { Store, action_toggle_modal, action_reset_dataset } from "../store";

import { Head, Card, Modal } from "../components/global";

import { modal_add_dataset } from "../constants";

import { CreateDataSet } from "../components/createDataset";

export default function Datasets() {
  const { globalDispatch, globalStore, dataStore, dataDispatch } =
    useContext(Store);

  useEffect(() => {
    dataDispatch(action_reset_dataset());
  }, [dataDispatch]);
  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my datasets"
        btn="create new dataset"
        callback={() =>
          globalDispatch(action_toggle_modal({ comp: modal_add_dataset }))
        }
      />

      {/* items  */}
      <div className="row g-5 ">
        {dataStore.datasets.length &&
          dataStore.datasets.map((item, index) => (
            <div key={index} className="col-4">
              <Card data={item} route="datasets" />
            </div>
          ))}
      </div>

      {globalStore.modalStatus.isActive && (
        <Modal title="create a new dataset">
          <CreateDataSet />
        </Modal>
      )}
    </section>
  );
}
