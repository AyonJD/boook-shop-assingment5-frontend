interface ButtonProps {
  children: string
}

const CustomButton: React.FC<ButtonProps> = ({ children }) => {
  return <button className="customButton_outlined">{children}</button>
}

export default CustomButton
