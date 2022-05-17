import styles from '../styles/AddForm.module.scss';

export default function AddForm({ setAdd, addForm, setAddForm, newLink, setLinks }) {
  return (
    <form className={styles.linkform}>
      <div>
        <input
          type="text"
          value={addForm.name || ''}
          placeholder="name"
          onChange={(e) => {
            setAddForm((prev) =>
              prev ? { ...prev, name: e.target.value } : { name: e.target.value }
            );
          }}
        />
        <input
          type="text"
          value={addForm.url || ''}
          placeholder="url"
          onChange={(e) => {
            setAddForm((prev) =>
              prev ? { ...prev, url: e.target.value } : { url: e.target.value }
            );
          }}
        />
      </div>

      <div>
        <button
          onClick={(e) => {
            newLink(setLinks, addForm);
            setAddForm({});
            setAdd(false);
          }}
        >
          Add
        </button>
        <button
          type="button"
          onClick={(e) => {
            setAddForm({});
            setAdd(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
