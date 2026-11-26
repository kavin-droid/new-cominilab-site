// "/" is the story home page (owner, 2026-11-26): the same page as /cominilab/story, in the CominiLab layout.
import CominiLabLayout from "./cominilab/layout";
import StoryHome from "./cominilab/story/page";

export { metadata } from "./cominilab/story/page";

export default function Home() {
  return (
    <CominiLabLayout params={Promise.resolve({})}>
      <StoryHome />
    </CominiLabLayout>
  );
}
