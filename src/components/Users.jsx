function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="user-container"
        >
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default Users;
