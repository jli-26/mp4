"use client";
import PropTypes from 'prop-types';

type CatProps = {
  cat: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
};

export default function Cat({ cat }: CatProps) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={cat.url}
        alt="Cat"
        width={cat.width}
        height={cat.height}
        className="w-64 h-64 object-cover"
      />
    </div>
  );
}


Cat.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};
