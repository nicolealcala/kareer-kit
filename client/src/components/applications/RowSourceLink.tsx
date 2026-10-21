type RowSourceLinkProps = {
  sourcePlatform?: string;
  sourceUrl?: string;
};
function RowSourceLink({ sourcePlatform, sourceUrl }: RowSourceLinkProps) {
  return sourceUrl ? (
    <a
      className="block items-center text-primary hover:underline underline-offset-2 truncate max-w-28"
      href={sourceUrl}
      target="_blank"
    >
      <span className="capitalize">{sourcePlatform}</span>
    </a>
  ) : (
    <span className="capitalize text-gray-500">{sourcePlatform}</span>
  );
}

export default RowSourceLink;
