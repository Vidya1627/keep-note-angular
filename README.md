# Angular Assignment - Note Taker

1. Notes View - collection of notes  
2. List View - collection of notes but classified into three lists based on their `state` values  
	- Not Started  
	- Started  
	- Completed  
3. Edit Note View - Both the NotesView and the ListView are able to edit notes and update the list and notes view.  
4. Note Taker Component: Both the NotesView and the ListView have a common NoteTakerComponent present in the DashboardComponent.  
5. Unit test cases for all the Components.  
6. Unit test cases for all the Services.  
7. E2E test cases to the application.    
8. Application to have following routes -  
	8.1. `dashboard` mapped to `DashboardComponent`  
	8.2. `dashboard/view/noteview` mapped to `NoteViewComponent`  
	8.3. `dashboard/view/listview` mapped to `ListViewComponent`  
	8.4. `login` mapped to `LoginComponent`  
	8.5. `note/:noteId/edit` mapped to `EditNoteOpenerComponent` rendered in `noteEditOutlet` named router outlet  
	`dashboard/view/noteview` being the default route  
9. `AppComponent` as the bootstrapping component  
10. `NoteComponent` displays a single note as a Material Card, with card title set to note title and card content set to note text. On click of this card, user is navigated to Edit View of the same note.  
11. `ListViewComponent` to have three properties in the component class as - `notStartedNotes`, `startedNotes`, `completedNotes` into which the updated collection of notes is classified based on the `state` property of Note objects.  
12. `EditNoteOpenerComponent` which gets rendered when application is routed to Edit View. This component extracts noteId from query parameter and passed same as data while opening EditNoteViewComponent in a Material Dialog.  
13. `EditNoteViewComponent` enables editing of a note by fetching the entire note using notesService.getNoteById() based on noteId provided in the data while opening this component in a Material Dialog. `onSave()` persists the updated note via notesService.editNote() and the dialog is closed after which the previous route is rendered by calling routerService.routeBack(). In case of any server error, the template has a label with class `error-message`, the text of which is set with the error object's message property.  
14. `NotesService` with two properties -> `notes` which is array of all the updated notes and `notesSubject` which is a BehaviourSubject of array of all updated notes and helps to emit changes to this array across subscribers, the service has methods as below -  
	14.1. `fetchNotesFromServer()` to fetch notes from backend and update the `notes` and `notesSubject` likewise in the service  
		INPUT - no params  
		URL - `http://localhost:3000/api/v1/notes`  
		METHOD - `GET`  
		RETURN TYPE - void  
	14.2. `getNotes()` to return the `notesSubject` of the service  
		INPUT - no params  
		RETURN TYPE - `BehaviorSubject<Array<Note>>`  
	14.3. `addNote()` to persist the new note created with server and update the `notes` and `notesSubject` of the service  
		INPUT - Note  
		URL - `http://localhost:3000/api/v1/notes`  
		METHOD - `POST`  
		RETURN TYPE - `Observable<Note>`  
	14.4. `editNote()` to persist the updated note with server and update the `notes` and `notesSubject` of the service  
		INPUT - Note  
		URL - `http://localhost:3000/api/v1/notes/${note.id}`  
		METHOD - `PUT`  
		RETURN TYPE - `Observable<Note>`  
	14.5. `getNoteById()` to fetch the note matching provided Id from `notes` collection of the service  
		INPUT - Number (noteId)  
		RETURN TYPE - Note  
15. `RouterService` to navigate user to available routes -  
	15.1. `routeToDashboard()` to navigate to dashboard route  
	15.2. `routeToLogin()` to navigate to login route  
	15.3. `routeToEditNoteView()` to navigate to edit view of the note of given noteId  
	15.4. `routeBack()` to navigate back to previous route  
	15.5. `routeToNoteView()` to navigate to notes view  
	15.6. `routeToListView()` to navigate to list view  
16. Ensure following commands succeed in your local machine before submitting your code for Preliminary automated review as described next -  
`npm install
npm run build
npm run lint
`
17. Ensure unit test cases pass -  
`npm run test
`
18. Ensure e2e test cases pass -  
`npm run serve` (backend shall be running before executing e2e test cases)  
`npm run e2e`

