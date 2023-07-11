const contacts = require('./contacts.js');
const { program } = require('commander');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case 'get':
      const contact = await contacts.getContactsById(id);
      return console.log(contact);
    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case 'remove':
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);

    default:
      return console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
