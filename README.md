## Welcome! 👋

"Kanban" (かんばん) is a Japanese word that translates directly as "visual card." As a project management methodology, Kanban involves creating visual cards that list details about a task and organizing them into columns on a board that represent different stages of a production process.

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Keep track of any changes, even after refreshing the browser

  Nice to have

- Toggle the theme between light/dark modes
- Allow users to drag and drop tasks to change their status and re-order them in a column

### Expected Behaviour

- Boards
  - Clicking different boards in the sidebar will change to the selected board.
  - Clicking "Create New Board" opens the "Add New Board" modal.
  - Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
  - Columns are added and removed for the Add/Edit Board modals.
  - Deleting a board deletes all columns and tasks and requires confirmation.
- Columns
  - A board needs at least one column before tasks can be added.
  - Clicking "Add New Column" opens the "Edit Board" modal where columns are added.
- Tasks
  - Adding a new task adds it to the bottom of the relevant column.
  - Updating a task's status will move the task to the relevant column. If you're taking on the drag and drop bonus, dragging a task to a different column will also update the status.

## Screenshot

![image](https://github.com/ryjw/Kanban-task-management/assets/106460341/5138fbb2-dea3-481f-aaad-9fb3f1f3bce7)

## Built with

- Next.js
- Sass
- Typescript
