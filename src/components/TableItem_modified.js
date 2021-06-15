import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDictionaryAsync } from "../reducers/dictionarySlice";
import Modal from "react-modal";

function TableItem({ item, searchWord }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const dispatch = useDispatch();

  const dictData = useSelector((state) => state.dictionary);
  useEffect(() => {
    dispatch(getDictionaryAsync());
  }, []);

  return (
    <>
      {dictData &&
        dictData
          .filter((e) =>
            searchWord === ""
              ? e
              : e.word &&
                e.word.toLowerCase().includes(searchWord.toLowerCase())
          )
          .map((item) => (
            <tr key={item.id}>
              <td style={{ textTransform: "capitalize" }}>{item.word}</td>
              <td>
                <b style={{ textTransform: "capitalize" }}>
                  {item.items && item.items[0].category} -{" "}
                </b>
                {item.items && truncate(item.items[0].definitions[0])}
              </td>
              <td>
                <button className="btn btn-danger btn-sm " onClick={openModal}>
                  View
                </button>
              </td>
            </tr>
          ))}
      {/* <Modal isOpen={modal} ariaHideApp={true}>
        <div className="modal-header">
          <h3 className="modal-word-header">
            {item.word && item.word.toUpperCase()}
          </h3>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => setModal(false)}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="model-content">
          <p>
            {item.items &&
              item.items.map((e) => {
                return (
                  <>
                    <i>{e.category}</i>
                    <ul>
                      {e.definitions.map((def) => {
                        return <li>{def}</li>;
                      })}
                    </ul>
                  </>
                );
              })}
          </p>
        </div>
      </Modal> */}
    </>
  );
}

function truncate(str) {
  if (str.length > 60) {
    return str.substr(0, 60) + "...";
  } else {
    return str;
  }
}

export default TableItem;
