import BreadCumbList from "./BreadCumbList";
import Title from "./Title";

export default function BreadCaumb({
  title,
  parentTitle,
  parentUrl,
  pageTitle,
  buttonGroup,
}) {
  return (
    <header className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between xs:-mt-2 lg:mb-7">
      <div>
        <Title title={title} />
        <BreadCumbList
          parentUrl={parentUrl}
          parentTitle={parentTitle}
            pageTitle={pageTitle}
        />
      </div>
      <div className="mt-4 flex items-center gap-3 lg:mt-0">{buttonGroup}</div>
    </header>
  );
}
