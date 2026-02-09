import project_schema from "projects.json" with { type: "json"}
console.log(project_schema.chea_kg)

export default function Home() {
  return (
    <div class='caption'>
      <h2> Projects </h2>
    </div>
  );
}