import { title, github } from "./config";

export default () => (
  <>
    <h1>{title}</h1>

    <p>
      <a href={github.url}>
         Source
      </a>
    </p>
  </>
);
