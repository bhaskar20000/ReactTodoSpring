import { MdDelete } from "react-icons/md";

import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, deleteFun, statusFun } = props;
  const { title, id, status } = todoDetails;

  const onClickDelete = () => {
    deleteFun(id);
  };

  const lineStyle = status === "completed" ? "line-through" : "none";
  console.log(lineStyle);

  const onChangeStatus = (event) => {
    if (event.target.checked) {
      statusFun(id, "completed");
    } else {
      statusFun(id, "pending");
    }
  };

  return (
    <div className="list-item">
      <div className="first-container">
        <input
          onChange={onChangeStatus}
          className="input-element"
          type="checkbox"
          checked={status === "completed"}
        />
        <p className={`title-para ${lineStyle}`}>{title}</p>
      </div>
      <div className="second-container">
        <MdDelete onClick={onClickDelete} className="delete-icon" />
      </div>
    </div>
  );
};

export default TodoItem;
