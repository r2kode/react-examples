type MessageProps = {
  id: string;
  text: string;
  userId: string;
};

export function MessageItem({ id, text, userId }: MessageProps) {
  return (
    <div key={id}>
      <div>
        <strong>{userId}: </strong>
        {text}
      </div>
    </div>
  );
}
