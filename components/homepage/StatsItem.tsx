import clsx from 'clsx';

import CountUp from 'react-countup';
import CoffeeFormula from './CoffeeFormula';

interface StatsItemProps {
  text: string;
  icon: React.ReactNode;
  value: number | string;
  subText: string;
  formula?: string;
}

const StatsItem = ({ text, icon, value, subText, formula }: StatsItemProps) => {
  const renderValue = () => {
    if (typeof value === 'number') {
      return (
        <CountUp
          end={value}
          className="text-4xl xl:text-6xl flex font-extrabold justify-center ml-sm mr-xs"
          duration={5}
          delay={1}
        />
      );
    } else if (typeof value === 'string') {
      const regex = /(\d*\.?\d+)|([^\d.]+)/g;
      const parts = value.match(regex) || [];

      return (
        <span className="text-xl flex items-baseline justify-center ml-sm">
          {parts.map((part, index) => {
            // Check if this part is a number
            if (/^\d*\.?\d+$/.test(part)) {
              const numValue = parseFloat(part);
              return (
                <CountUp
                  key={index}
                  end={numValue}
                  duration={5}
                  delay={1}
                  decimals={part.includes('.') ? part.split('.')[1].length : 0}
                  preserveValue={true}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              );
            }
            // Return non-numeric parts as is
            return (
              <div className="mr-xs ml-2xs" key={index}>
                {part}
              </div>
            );
          })}
        </span>
      );
    }

    return <span className="text-3xl">{value}</span>;
  };

  return (
    <div
      className={clsx(
        'mb-xl mx-auto',
        text === '' && 'lg:ml-0',
        text === 'Coffees' && 'col-span-1 md:col-span-2 lg:col-span-1 lg:mr-0'
      )}
    >
      {/* Top */}
      <div className="flex items-end pb-sm">
        {icon}
        <div className="flex items-baseline">
          {renderValue()}
          {text && <p className="text-xl">{text}</p>}
        </div>
      </div>
      {/* Bottom */}
      <div className="flex text-sm xl:text-base text-accent justify-center items-center lg:justify-normal gap-xs">
        {subText}
        {formula && <CoffeeFormula formula={formula} />}
      </div>
    </div>
  );
};

export default StatsItem;
