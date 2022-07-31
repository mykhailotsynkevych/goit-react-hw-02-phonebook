import s from './Contacts.module.css';

const Contacts = ({ contacts }) => {
  return (
    <div className={s.wrap}>
      <h3 className={s.title}>Contacts</h3>
      <ul className={s.list} >
        {contacts.map(contactEl => (
          <li key={contactEl.id} className={s.item}>
                <p className={s.discription}>{contactEl.name}</p>
                <p className={s.discription}>{contactEl.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
