import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Card,
  CreateModal,
  EditModal,
  Verify,
  ViewModal,
} from "../../components";
import { CreateIcon, Dropdown } from "../../Icons";
import { DashboardStyle } from "./DashboardStyle";
import { useLazyQuery } from "@apollo/client";
import { GetItemsQuery } from "../../graphql/queries/GetItems";
import {
  CreateItemMutation,
  DeleteItemMutation,
  UpdateItemMutation,
} from "../../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";
import ReactLoading from "react-loading";
import { AppContext } from "../../context";
import { useOnClickOutside } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [pageData, setPageData] = useState([]);

  const [getAllItems, { data, loading }] = useLazyQuery(GetItemsQuery);

  const [currentPage, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [deleteLoading, setDeleteLoading] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const [isViewing, setIsViewing] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [cardId, setCardId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const [createItem] = useMutation(CreateItemMutation);

  const [deleteItem] = useMutation(DeleteItemMutation);

  const [updateItem] = useMutation(UpdateItemMutation);

  const { user, setUser } = useContext(AppContext);

  const client = useApolloClient();
  const ref = useRef();
  const navigate = useNavigate();

  const handleDisplayModal = () => {
    setDisplayModal(false);
    setIsViewing(false);
    setIsEditing(false);
  };

  const handleCreate = () => {
    setDisplayModal(true);
  };

  //To hide document body overflow when create modal is rendered
  useEffect(() => {
    if (displayModal || isEditing || isViewing) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  }, [displayModal, isEditing, isViewing]);

  //to fetch all items
  useEffect(() => {
    const GetAllItems = async () =>
      await getAllItems({
        variables: {
          page: currentPage,
          count: count,
        },
      });

    if (currentPage) {
      GetAllItems();
    }
  }, [currentPage]);

  //updates the page data array
  useEffect(() => {
    if (data) {
      setPageData(data?.getItems?.items);
    }
  }, [data]);

  async function createEvent() {
    if (name && description) {
      setCreateLoading(true);
      try {
        let newData;
        newData = await createItem({
          variables: {
            name: name,
            description: description,
          },
        });
        if (newData) {
          setPageData([...pageData, newData?.data?.createItem]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setDisplayModal(false);
        setName("");
        setDescription("");
        client.resetStore();

        setCreateLoading(false);
      }
    }
  }

  async function handleEdit(id, name, description) {
    if ((id, name && description)) {
      setEditLoading(true);
      try {
        let newData;
        newData = await updateItem({
          variables: {
            uuid: id,
            name: name,
            description: description,
          },
        });
        const deletedData = newData?.data?.deleteItem;
        const filteredData = pageData?.filter(
          (data) => data.uuid !== deletedData?.uuid
        );

        if (filteredData) {
          setPageData([...filteredData]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        handleHideModal();
        setEditLoading(false);
        client.resetStore();
        // closeModal();
      }
    }
  }

  async function handleDelete(id) {
    setDeleteLoading(id);
    setIsDeleting(true);
    if (id) {
      try {
        let newData;
        newData = await deleteItem({
          variables: {
            uuid: id,
          },
        });
        if (newData?.data) {
          const deletedData = newData?.data?.deleteItem;
          const filteredData = pageData?.filter(
            (data) => data.uuid !== deletedData?.uuid
          );

          if (filteredData) {
            setPageData([...filteredData]);
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        client.resetStore();
        // closeModal();
        setIsDeleting(false);
        setIsViewing(false);
      }
    }

    setDeleteLoading("");
  }

  //function that lets you view an item
  const handleCardClick = (id) => {
    setIsViewing(true);
    setCardId(id);
  };

  //function to edit
  const handleEditClick = (id) => {
    setCardId(id);
    setIsViewing(false);
    setIsEditing(true);
  };

  //delete item
  const handleDeleteClick = (id) => {
    setCardId(id);
    setIsViewing(false);
    setIsEditing(false);
    handleDelete(id);
  };

  const handleHideModal = () => {
    setIsEditing(false);
    setIsViewing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    client.resetStore();
    navigate("/");
  };

  //hides component when you click outside it for logout button
  useOnClickOutside(ref, () => setShowLogout(false));

  return (
    <>
      <DashboardStyle>
        <div className="DashboardContainer">
          <header>
            {user?.email_verified_at === null ? <Verify /> : null}
            <div className="HeaderContainer">
              <h1>Dashboard</h1>
              <div className="NameDropdown" onClick={() => setShowLogout(true)}>
                <h2>
                  {`${user?.first_name || ""} ${user?.last_name || ""} `}{" "}
                </h2>
                <Dropdown />
              </div>
            </div>
            {showLogout && (
              <div className="Logut" onClick={handleLogout} ref={ref}>
                <p>Logout</p>
              </div>
            )}
          </header>
          <div className="PaginationButton">
            <button
              onClick={() => setPage((prevState) => prevState - 1)}
              disabled={currentPage <= 1 ? true : false}
            >
              previous
            </button>
            <button
              onClick={() => setPage((prevState) => prevState + 1)}
              disabled={
                currentPage >= data?.getItems?.pagination.maxPages
                  ? true
                  : false
              }
            >
              next
            </button>
          </div>
          {loading ? (
            <div className="LoadContainer">
              <ReactLoading
                type={"spin"}
                color={"black"}
                height={"100px"}
                width={"100px"}
              />
            </div>
          ) : (
            <div className="DashboardBody">
              {pageData &&
                pageData?.map((item) => (
                  <Card
                    name={item?.name}
                    description={item?.description}
                    loading={deleteLoading}
                    handleDelete={handleDeleteClick}
                    id={item?.uuid}
                    handleClick={handleCardClick}
                    handleEditClick={handleEditClick}
                    key={item?.id}
                  />
                ))}
            </div>
          )}
          <div className="Create">
            <CreateIcon onClick={handleCreate} />
          </div>
        </div>

        {displayModal && (
          <CreateModal
            hideModal={handleDisplayModal}
            name={name}
            description={description}
            setName={setName}
            handleClick={createEvent}
            setDescription={setDescription}
            loading={createLoading}
          />
        )}
        {isViewing && !isDeleting ? (
          <ViewModal
            id={cardId}
            pageData={pageData}
            handleHideModal={handleHideModal}
          />
        ) : null}
        {isEditing && (
          <EditModal
            id={cardId}
            pageData={pageData}
            handleHideModal={handleHideModal}
            handleEdit={handleEdit}
            loading={editLoading}
          />
        )}
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
