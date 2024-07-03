import './WordList.module.css'

export default function WordList() {


    return (
        <div className="word-table-container">
          <table>
            <thead>
              <tr>
                <th>English</th>
                <th>Transcription</th>
                <th>Russian</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" placeholder="English" /></td>
                <td><input type="text" placeholder="Transcription" /></td>
                <td><input type="text" placeholder="Russian" /></td>
                <td>
                  <button className="save-btn">Save</button>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="add-btn">Add</button>
        </div>
      );
}