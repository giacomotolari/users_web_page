function Users({ users }) {
  const handleMouseOver = (e) => {
    e.currentTarget.style.borderColor = "red";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.borderColor = "";
  };

  // ref funktioniert nicht wenn the ref is an element of an array in a map

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="user-container"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
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
