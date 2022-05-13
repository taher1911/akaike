import React, { useContext } from "react";

import { Store, action_toggle_modal } from "../store";

import { Head, Card, Modal } from "../components/global";

import { models, modal_add_dataset } from "../constants";

import { CreateDataSet } from "../components/crud";
import { Router } from "react-router-dom";

export default function Models() {
  const { globalDispatch, globalStore } = useContext(Store);
  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my models"
        btn="create new model"
        callback={() =>
          // globalDispatch(action_toggle_modal({ comp: modal_add_dataset }))
          console.log("create-model")
        }
      />

      {/* items  */}
      <div className="row g-5 ">
        {models.map((item) => (
          <div key={item.id} className="col-4">
            <Card data={item} route="models" />
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
