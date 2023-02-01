import Image from 'next/image';

const Person = () => {
  return (
    <button>
      <Image src="svg/person.svg" width={25} height={25} alt="Person icon" />
    </button>
  );
};

export default Person;
