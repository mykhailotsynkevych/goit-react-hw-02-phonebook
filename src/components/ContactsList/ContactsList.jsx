import PropTypes from 'prop-types';
import s from './Contacts.module.css';
// import ContactsEl from './ContactsEl'

const ContactsList = ({ contactsList, onDeleteContact}) => {
  return (
    <div className={s.wrap}>
      <ul className={s.list} >
        {contactsList.map(contactEl => (
          //         <ContactsEl
          //   key={contactEl.id}
          //   name={contactEl.name}
          //   number={contactEl.number}
          //   onDeleteContact={onDeleteContact}
          // />
          <li key={contactEl.id} className={s.item}>
            <p className={s.discription}>{contactEl.name}</p>
            <p className={s.discription}>{contactEl.number}</p>
            <button className={s.button} onClick={() => onDeleteContact(contactEl.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
