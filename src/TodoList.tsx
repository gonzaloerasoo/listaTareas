const tasks = ["Estudiar React", "Repasar Angular", "Jugar un rato"];

function TodoList() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Lista de tareas</h2>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "1.5rem",
          textAlign: "left",
          display: "inline-block",
        }}
      >
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
