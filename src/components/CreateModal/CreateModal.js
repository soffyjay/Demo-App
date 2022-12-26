import React from "react";
import { CreateStyle } from "./CreateModalStyle";
import TextInput from "../TextInput/TextInput";

const CreateModal = ({
  hideModal,
  name,
  description,
  handleClick,
  setName,
  loading,
  setDescription,
}) => {
  return (
    <CreateStyle>
      <div className="CreateContent">
        <h2>Create Item</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput
            name="Name"
            value={name}
            placeholder="Input item name here"
            width="452px"
            handleChange={(e) => setName(e.target.value)}
          />
          <div className="InputTextArea">
            <label htmlFor="add note">Add Note</label>
            <textarea
              placeholder="Type here"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="ActionButtons">
            <button className="Cancel" onClick={hideModal}>
              Cancel
            </button>
            <button onClick={handleClick}>
              {loading ? "Creating event...." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </CreateStyle>
  );
};

export default CreateModal;
