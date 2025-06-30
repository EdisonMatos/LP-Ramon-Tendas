export default function ButtonCtaNavbar(props) {
  const { icon, label, className, link } = props;

  return (
    <a href={link} target="_blank">
      <button
        className={`${className} flex flex-row items-center justify-center transition rounded-[10px] px-[18px] py-[10px] bg-whatsapp border-solid hover:bg-white text-white hover:text-primary hover:border-solid hover:border-[1px] hover:border-primary`}
      >
        <div className="flex items-center text-center gap-[10px]">
          <div className="flex flex-col justify-end">{icon}</div>
          <p className="flex items-center font-bold text-paragraph3 font-secondFont">
            {label}
          </p>
        </div>
      </button>
    </a>
  );
}
