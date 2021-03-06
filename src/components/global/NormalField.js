import React, { Fragment, useState } from "react";

import { Field, ErrorMessage } from "formik";

import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlinedIcon";

import styles from "../../styles/global/form.module.css";

export default function NormalField({
  name,
  label,
  type,
  placeholder,
  disabled,
  icon,
  style,
  wrapperStyle = {},
  labelStyle = {},
}) {
  // for password show/hide btn
  const [passwordShown, setPasswordShown] = useState(false);
  const handleInpType = () => {
    if (type === "password") {
      if (passwordShown) {
        return "text";
      } else {
        return "password";
      }
    }
    return type;
  };
  return (
    <Fragment>
      <div className={`form-group ${styles.formGroup}`} style={wrapperStyle}>
        {label && (
          <label
            htmlFor={label}
            className={`${styles.label}`}
            style={labelStyle}
          >
            {label}
          </label>
        )}
        <Field
          type={handleInpType()}
          name={name}
          id={label}
          placeholder={placeholder}
          className={`form-control ${styles.input}  ${
            disabled ? styles.disabledInput : ""
          }`}
          disabled={disabled ? disabled : false}
          style={style}
        />
        {type === "password" && (
          <button
            onClick={() => setPasswordShown(!passwordShown)}
            type="button"
            className={`${styles.passwordBtn} ${
              passwordShown ? styles.active : ""
            }`}
          >
            {!passwordShown ? (
              <VisibilityOutlined />
            ) : (
              <VisibilityOffOutlined />
            )}
          </button>
        )}
        {icon && <span className={`${styles.fieldIcon} `}>{icon}</span>}
      </div>
      <ErrorMessage name={name} component="span" className={styles.errorMsg} />
    </Fragment>
  );
}
