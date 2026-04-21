import { useState } from "react";
import { formConfig } from "../config/formConfig";
import { validateField } from "../utils/validate";

export default function ConfigDrivenForm() {
  const initialForm = formConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [validationMode, setValidationMode] = useState("onChange");


  const runValidation = (field, value, newFormData) => {
    const error = validateField(field, value, newFormData);

    setErrors(prev => ({
      ...prev,
      [field.name]: error
    }));
  };

  const handleChange = (e, field) => {
    const { name, value } = e.target;

    const newFormData = {
      ...formData,
      [name]: value
    };

    setFormData(newFormData);

    if (validationMode === "onChange") {
      runValidation(field, value, newFormData);
    }
  };

  const handleBlur = (e, field) => {

    if (validationMode === "onBlur") {
      runValidation(field, e.target.value, formData);
    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newErrors = {};

    formConfig.forEach(field => {

      const error = validateField(
        field,
        formData[field.name],
        formData
      );

      if (error) {
        newErrors[field.name] = error;
      }

    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("FORM SUBMITTED:", formData);
    }

  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
  };


  const getOptions = (field) => {

    if (!field.dependsOn) {
      return field.options || [];
    }

    const parentValue = formData[field.dependsOn];

    return field.conditional?.[parentValue] || [];

  };

  return (
    <div>

      <h1>Validation Mode</h1>

      <select
        value={validationMode}
        onChange={(e) => setValidationMode(e.target.value)}
      >
        <option value="onChange">On Change</option>
        <option value="onBlur">On Blur</option>
        <option value="onSubmit">On Submit</option>
      </select>

      <hr />

      <form onSubmit={handleSubmit}>

        {formConfig.map(field => {

          const value = formData[field.name] || "";

          return (

            <div key={field.name} style={{ marginBottom: "12px" }}>

              <label>{field.label}</label>

              {field.type === "select" ? (

                <select
                  name={field.name}
                  value={value}
                  onChange={(e) => handleChange(e, field)}
                  onBlur={(e) => handleBlur(e, field)}
                >

                  <option value="">Select</option>

                  {getOptions(field).map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}

                </select>

              ) : (

                <input
                  type={field.type}
                  name={field.name}
                  value={value}
                  onChange={(e) => handleChange(e, field)}
                  onBlur={(e) => handleBlur(e, field)}
                />

              )}

              {errors[field.name] && (
                <div style={{ color: "red" }}>
                  {errors[field.name]}
                </div>
              )}

            </div>

          );

        })}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>

      </form>

    </div>
  );

}