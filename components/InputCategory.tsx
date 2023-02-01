import React from 'react';

const InputCategory = ({
  text,
  setCategory,
  setIsActive,
}: {
  text: string;
  setCategory: any;
  setIsActive: any;
}) => {
  const changeCategory = () => {
    setCategory(text);
    setIsActive(false);
  };
  return (
    <input
      onClick={changeCategory}
      className="w-full outline-none cursor-pointer bg-transparent hover:ml-[50px] hover:scale-[1.2] sm:hover:ml-[25px] duration-[0.2s]"
      readOnly
      type="text"
      value={text}
    />
  );
};

export default InputCategory;
