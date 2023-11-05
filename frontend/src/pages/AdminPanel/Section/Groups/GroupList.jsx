//-Components
import AddGroup from "./AddGroup"
import GroupButton from "./GroupButton"
import IngredientList from "../Ingredient/IngredientList";
//-MUI icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function GroupList(props) {
  const section = props.section
  return (
    <div className='editSectionIngridientGroupsList'>
      <div className='ingridientGroupsListHeader'>
        <h3>Groups of additional ingredients <span title="A list of group for extra ingridients. Click on one in the list to see a list of ingridients in this group below"><InfoOutlinedIcon /></span>
        </h3>
        <AddGroup section={section} />
      </div>
      <div className='ingridientGroupsList'>
        {section?.extraIngredientTypes?.length > 0 ?
          (
            section.extraIngredientTypes.map((group) => (
              <GroupButton key={group._id} group={group} />
            ))
          ) :
          (
            <div className='noGroupsInList'>
              <h3>
                <i>Section doesn't have added ingredient groups</i>
              </h3>
            </div>
          )}
      </div>

      {/* INGREDIENTS *****************************************/}
      <IngredientList section={section} />
    </div>
  )
}

export default GroupList