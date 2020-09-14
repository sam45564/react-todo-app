import React from "react";
import Delete from "./delete";

const List = ({ data, onDeleteClick }) => {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Content</th>
                    <th scope="col">Due Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(datum => (<tr key={datum.id}>
                    <th scope="row">{datum.id}</th>
                    <td>{datum.content}</td>
                    <td>{datum.dueDate}</td>
                    <td><Delete item={datum} onClickEvent={onDeleteClick} /></td>
                </tr>))}
            </tbody>
        </table>
    );
}

export default List;