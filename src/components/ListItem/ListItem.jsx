import Button from "../Button/Button";
function ListItem(props) {
  const { item, handleDelete } = props;
  const handleSubmit = () => {
    handleDelete(item);
  };
  return (
    <>
      <div className="flex w-full justify-between m-6">
        <li className="text-xl text-white" key={item.key}>
          {item.currText}
        </li>
        <Button placeholder="Delete" handleSubmit={handleSubmit} type="del" />
      </div>
    </>
  );
}

export default ListItem;
