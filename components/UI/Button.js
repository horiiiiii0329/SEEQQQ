function Button({ text }) {
  return (
    <div>
      <button className="text-sm text-white bg-[#1D3557] rounded-full py-3 px-9">
        {text}
      </button>
    </div>
  );
}

export default Button;
