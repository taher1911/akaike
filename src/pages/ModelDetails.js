import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { models } from "../constants";

import { Head } from "../components/global";

import styles from "../styles/dataset/index.module.css";

export default function ModelDetails() {
  const { id } = useParams();

  // fetch single item
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filter = models.filter((item) => parseInt(item.id) === parseInt(id));
    setItem(...filter);
  }, [id]);

  // loading
  if (!item) {
    return "loading...";
  }
  return (
    <section className="p-l p-r p-b p-t">
      <Head title={item.title} />

      {/* items  */}
      <div className="row g-5 ">
        <div className="col-6">
          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              model name:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.title}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset used:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.tags.map((tag, index) => (
                <span key={index} style={{ textDecoration: "underline" }}>
                  {tag} {item.tags.length - 1 === index ? "" : ", "}
                </span>
              ))}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox}`}>
            <h5
              className={`m-0 text-capitalize ${styles.detailsTitle} ${styles.metadata}`}
            >
              dataset metadata -
            </h5>
            <div>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                owner - {item.metadata.owner}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                last edited - {item.metadata.owner}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                training/test/validation split - {item.metadata.owner}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                total number of images : {item.metadata.images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                annotaed images: {item.metadata.a_images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of unique classes: {item.metadata.classes}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of epochs: {item.metadata.owner}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className={`${styles.detailsBox}`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              model name:
              <p className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                {item.title}
              </p>
            </h5>
            {/* <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.title}
            </h6> */}
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset used:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.tags.map((tag, index) => (
                <span key={index} style={{ textDecoration: "underline" }}>
                  {tag} {item.tags.length - 1 === index ? "" : ", "}
                </span>
              ))}
            </h6>
          </div>
        </div>
      </div>

      <Link
        to="/datasetedit"
        className={`our-btn d-inline-flex ${styles.editBtn} text-capitalize`}
      >
        edit this dataset
      </Link>
    </section>
  );
}
