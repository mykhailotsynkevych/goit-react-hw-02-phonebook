import s from './Contacts.module.css';
// import ContactsEl from './ContactsEl'

const ContactsList = ({ contactsList }) => {
  return (
    <div className={s.wrap}>
      <ul className={s.list} >
        {contactsList.map(contactEl => (
          <li key={contactEl.id} className={s.item}>
                <p className={s.discription}>{contactEl.name}</p>
            <p className={s.discription}>{contactEl.number}</p>
            <button className={s.button}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
