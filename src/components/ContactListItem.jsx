export default function ContactListItem({ id, name, number, onDelete }) {
    return (
      <li>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
  