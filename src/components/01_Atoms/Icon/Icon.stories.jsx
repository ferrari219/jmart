import Icon, { iconTypes } from './Icon';

export default {
  title: '01_Atom/Icon',
  component: Icon,
};

const icon = () => <Icon icon="Close" />;
// const Template = (args) => <Icon {...args} />;

export const listOfIcons = () => {
  return (
    <ul>
      {/* ul css={iconListStyle} */}
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};
