import Button from "../Button/Button";
import useTheme from "../../context/Theme/ThemeContext";
import { useState } from "react";
function ListItem({ item, handleDelete, isComplete, handleEdit }) {
  const { themeMode } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [currText, setCurrText] = useState(item.currText);
  return (
    <>
      <div className="flex w-full justify-between m-6">
        <div className="flex gap-4">
          <input
            type="checkbox"
            id={item.key}
            checked={isComplete}
            onChange={(e) =>
              handleEdit({ ...item, isComplete: e.target.checked })
            }
          />
          <li
            className={`text-xl ${
              isComplete ? "text-green-600 line-through" : ""
            }   ${themeMode === "dark" ? "text-[#e7e7ec]" : "text-[#27272a]"} `}
            key={item.key}
          >
            {isEditing ? (
              <>
                <input
                  value={currText}
                  onChange={(e) => setCurrText(e.target.value)}
                  className="bg-transparent rounded-lg border-2 
                  border-gray-300 appearance-none  
                  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
              </>
            ) : (
              <>{currText}</>
            )}
          </li>
        </div>
        <div>
          <Button
            placeholder="Delete"
            handleSubmit={() => handleDelete(item)}
            type="del"
          />
          {isEditing ? (
            <Button
              placeholder="Save"
              handleSubmit={() => {
                handleEdit({ ...item, currText: currText });
                setIsEditing(false);
              }}
              type="add"
            />
          ) : (
            <Button
              placeholder="Edit"
              handleSubmit={() => setIsEditing(true)}
              type="add"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ListItem;
