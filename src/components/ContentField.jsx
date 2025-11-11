export default function ContentField({
  contentKey,
  value = '',
  onChange,
}) {

  return (
    <textarea
      data-content-key={contentKey}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
