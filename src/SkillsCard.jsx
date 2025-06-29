const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="hover:text-orange-900 duration-300">
      <span>{icon}</span>
      {/* <h4 className="mt-6 font-bold text-orange-200">{title}</h4>
      <p className="mt-2 text-orange-200">{text}</p> */}
    </article>
  );
};
export default SkillsCard;
