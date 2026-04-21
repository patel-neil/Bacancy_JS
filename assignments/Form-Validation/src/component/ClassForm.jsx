import React, { Component } from "react";
import { formConfig } from "../config/formconfig";
import { validateField } from "../utils/validate";

class ClassForm extends Component {

  state = {
    formData: {},
    errors: {},
    validationMode: "onChange"
  };

  handleModeChange = (e) => {
    this.setState({ validationMode: e.target.value });
  };

  handleChange = (field, value) => {

    const { formData, validationMode } = this.state;

    const updatedForm = {
      ...formData,
      [field.name]: value
    };

    this.setState({ formData: updatedForm });

    if (validationMode === "onChange") {
      const error = validateField(field, value, updatedForm);

      this.setState(prev => ({
        errors: {
          ...prev.errors,
          [field.name]: error
        }
      }));
    }
  };

  handleBlur = (field, value) => {

    const { formData, validationMode } = this.state;

    if (validationMode === "onBlur") {

      const error = validateField(field, value, formData);

      this.setState(prev => ({
        errors: {
          ...prev.errors,
          [field.name]: error
        }
      }));
    }
  };

  handleSubmit = (e) => {

    e.preventDefault();

    const { formData } = this.state;

    const errors = {};

    formConfig.forEach(field => {
      const error = validateField(field, formData[field.name], formData);

      if (error) {
        errors[field.name] = error;
      }
    });

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  handleReset = () => {
  this.setState({
    formData: {},
    errors: {}
  });
};

  renderField = (field) => {

    const { formData, errors } = this.state;

    const value = formData[field.name] || "";

    let options = field.options;

    if (field.dependsOn) {
      const parentValue = formData[field.dependsOn];
      options = field.conditional[parentValue] || [];
    }

    return (

      <div key={field.name} style={{ marginBottom: "15px" }}>

        <label>{field.label}</label>

        {field.type === "select" ? (

          <select
            value={value}
            onChange={(e) => this.handleChange(field, e.target.value)}
            onBlur={(e) => this.handleBlur(field, e.target.value)}
          >

            <option value="">Select</option>

            {options && options.map(opt => (
              <option key={opt}>{opt}</option>
            ))}

          </select>

        ) : (

          <input
            type={field.type}
            value={value}
            onChange={(e) => this.handleChange(field, e.target.value)}
            onBlur={(e) => this.handleBlur(field, e.target.value)}

            onKeyDown={(e) => {
              if (field.type === "number") {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault();
                }
              }
            }}
          />
        )}

        {errors[field.name] && (
          <div style={{ color: "red" }}>
            {errors[field.name]}
          </div>
        )}

      </div>
    );
  };

  render() {

    const { validationMode } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>

        <h2>Validation Mode</h2>

        <select value={validationMode} onChange={this.handleModeChange}>
          <option value="onChange">On Change</option>
          <option value="onBlur">On Blur</option>
          <option value="onSubmit">On Submit</option>
        </select>

        <hr />

        {formConfig.map(this.renderField)}

        <button type="submit">
          Submit
        </button>
        
        <button type="button" onClick={this.handleReset}>
        Reset
        </button>

      </form>
    );
  }
}

export default ClassForm;