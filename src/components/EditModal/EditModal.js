import React, { useState } from "react";
import { EditStyle } from "./EditModalStyle";
import TextInput from "../TextInput/TextInput";

const EditModal = ({ handleHideModal, handleEdit, loading, id, pageData }) => {
  const eventItem = pageData?.filter((data) => data.uuid === id)[0];

  const [name, setName] = useState(eventItem?.name);
  const [description, setDescription] = useState(eventItem?.description);

  return (
    <EditStyle>
      <div className="CreateContent">
        <h2>Edit Item</h2>
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
            <button className="Cancel" onClick={handleHideModal}>
              Cancel
            </button>
            <button onClick={() => handleEdit(id, name, description)}>
              {loading ? "Updating event....." : " Update Event"}
            </button>
          </div>
        </form>
      </div>
    </EditStyle>
  );
};

export default EditModal;
