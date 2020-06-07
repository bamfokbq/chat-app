const users = [];

const addUser = ({ id, username, room }) => {
  // CLEAN THE DATA
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  // VALIDATE THE DATA
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }
  // CHECK FOR EXISTING USER
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  // VALIDATE USERNAME
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }
  // STORE USER
  const user = { id, username, room };
  users.push(user);
  return { user };
};
// REMOVE USERS
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (!index !== -1) {
    return users.splice(index, 1)[0];
  }
};
// GET USERS
const getUser = (id) => {
  const foundUser = users.find((user) => {
    return user.id === id;
  });
  return foundUser;
};
// GET USERS IN ROOM
const getUsersInRoom = (room) => {
  const allUserInARoom = users.filter((user) => {
    return user.room === room;
  });

  return allUserInARoom;
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
