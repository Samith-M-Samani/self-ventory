function TaskCard({ title, description, completed = false }) {
  return (
    <div className="task-card">
      <h3 className="task-card__title">{title}</h3>
      <p className="task-card__description">{description}</p>
      <span className={`task-card__status ${completed ? "task-card__status--done" : ""}`}>
        {completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}

export default TaskCard;
