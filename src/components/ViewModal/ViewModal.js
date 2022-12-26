import React from "react";
import { ViewStyle } from "./ViewModalStyle";
import TextInput from "../TextInput/TextInput";

const ViewModal = ({ id, pageData, handleHideModal }) => {
  const eventItem = pageData?.filter((data) => data.uuid === id)[0];

  return (
    <ViewStyle>
      <div className="CreateContent">
        <form>
          <TextInput
            name="Name"
            value={eventItem?.name}
            placeholder="Input item name here"
            width="452px"
            disabled
          />
          <div className="InputTextArea">
            <label htmlFor="add note">Add Note</label>
            <textarea
              placeholder="Type here"
              value={eventItem?.description}
              required
              disabled
            />
          </div>
          <div className="ActionButtons">
            <button className="Cancel" onClick={handleHideModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ViewStyle>
  );
};

export default ViewModal;
