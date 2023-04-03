import classNames from 'classnames';

function Skeleton({ times, className }) {

    const outerClasses = classNames(
        'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    className
    );
    const innerClasses = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );

    const renderedItems = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClasses}>
          <div className={innerClasses} />
        </div>
      );
    });


    return renderedItems;
}

export default Skeleton;