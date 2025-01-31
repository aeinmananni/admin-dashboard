type TooltipProps = {
  text: string;
  children: React.ReactNode;
  className?: string;
};

const Tooltip = ({ text, children, className }: TooltipProps) => {
  return (
    <div className={`${className} inline-block group`}>
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white bg-slate-800 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
