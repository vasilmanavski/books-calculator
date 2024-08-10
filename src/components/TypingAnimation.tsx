interface Props {
  text: string;
}

const TypingAnimation = ({ text }: Props) => {
  return (
    <div className={'typing-animation'}>{text}?</div>
  );
};

export default TypingAnimation;